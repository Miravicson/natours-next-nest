import { HttpStatus, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { CookieOptions, Request, Response } from 'express';
import ms, { StringValue } from 'ms';

import { EnvironmentVariables } from '@/common/config/env.validation';
import { User, UserDocument, UserModel } from '@/common/db/mongoose-schemas/user/user.schema';
import { OperationalException } from '@/common/exception-filters/OperationalException';
import { hashToken } from '@/common/lib/gen-token-and-hash';
import { MailService } from '@/common/mail/mail.service';
import { UpdatePasswordDto } from '@/user/dto/update-password.dto';
import { UserService } from '@/user/user.service';

import { JWT_COOKIE_KEY } from './constant';
import { ConfirmEmailDto } from './dto/confirm-email.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { SignupCredentialsDto } from './dto/signup.dto';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @InjectModel(User.name) private readonly userModel: UserModel,
    private mailService: MailService,
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {}

  private logger = new Logger(this.constructor.name);

  private setJwtCookie(req: Request, res: Response, jwtToken: string, maxAge?: number): void {
    const cookieOptions: CookieOptions = {
      maxAge: typeof maxAge === 'number' ? maxAge : ms(this.configService.get<StringValue>('COOKIE_EXPIRY')!),
      path: '/',
      httpOnly: true,
      sameSite: 'strict', // need to specify this in order to work in chrome
      secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    };

    if (this.configService.get('isProduction', { infer: true })) {
      this.logger.log(`Setting the cookie domain to mairmoire.com`);
      cookieOptions.domain = '.natours.com';
    }

    res.cookie(JWT_COOKIE_KEY, jwtToken, cookieOptions);
  }

  private async createAccessTokenFromUser(user: Partial<User>) {
    const userDocument = await this.userService.getOne({ email: user.email });
    const payload: JwtPayload = {
      email: userDocument.email,
      sub: userDocument._id.toString(),
      iat: Date.now(),
    };
    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }

  async login(req: Request, res: Response, loginDto: LoginDto): Promise<{ accessToken: string; user: User }> {
    const { email, password } = loginDto;

    const user = await this.userService.getOne(
      {
        email: email.trim().toLowerCase(),
      },
      { withPassword: true },
    );

    if (user && (await user.comparePassword(password))) {
      const payload = user.createJwtPayload();
      const accessToken = await this.jwtService.signAsync(payload);
      this.setJwtCookie(req, res, accessToken);
      return { accessToken, user };
    }
    throw new UnauthorizedException('Please check your login credentials');
  }

  async signOut(req: Request, res: Response): Promise<void> {
    this.setJwtCookie(req, res, '', 0);
  }

  async signup(req: Request, res: Response, signupCredentialsDto: SignupCredentialsDto): Promise<User> {
    const existingUser = await this.userModel.findOne({
      email: signupCredentialsDto.email,
    });

    if (existingUser) {
      throw new OperationalException(
        'An account is associated with this email. Try logging in with the email',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.userModel.create(signupCredentialsDto);

    const emailConfirmToken = user.createConfirmationToken();
    await user.save({ validateBeforeSave: false });
    const accessToken = await this.createAccessTokenFromUser(user);
    this.mailService.sendConfirmationEmail({ user, token: emailConfirmToken });
    this.setJwtCookie(req, res, accessToken);
    return user;
  }

  async confirmSignupEmail(confirmEmailDto: ConfirmEmailDto, user: User) {
    if ((user as UserDocument).hasConfirmedEmail()) {
      return 'You have already confirmed your email address.';
    }

    const { token } = confirmEmailDto;
    const hashedToken = hashToken(token);
    const unconfirmedUser = await this.userModel.findOne({
      email: user.email,
      emailConfirmToken: hashedToken,
    });

    if (!unconfirmedUser) {
      throw new OperationalException('Invalid confirmation token', HttpStatus.EXPECTATION_FAILED);
    }

    unconfirmedUser.confirmEmail();
    await unconfirmedUser.save({ validateBeforeSave: false });
    // send mail
    this.mailService.sendWelcomeEmail({ user });
    return 'Email has been confirmed';
  }

  async resendConfirmEmail(reqUser: User): Promise<string> {
    const user = reqUser as UserDocument;
    if (user.hasConfirmedEmail()) {
      return 'You have already confirmed your email address.';
    }

    const emailConfirmToken = user.createConfirmationToken();
    await user.save();
    //send mail
    this.mailService.sendConfirmationEmail({ user, token: emailConfirmToken });
    return 'Email confirmation has been resent to your email address.';
  }

  async sendForgotPasswordEmail(forgotPasswordDto: ForgotPasswordDto) {
    const { email } = forgotPasswordDto;
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      throw new OperationalException('Could you check that your email address is correct.', HttpStatus.NOT_FOUND);
    }

    const passwordResetToken = user.forgotPassword();
    await user.save();

    // send mail
    this.mailService.sendPasswordResetToken({
      user,
      token: passwordResetToken,
    });

    return 'Please check your email for a link to reset your password.';
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    const { token, password } = resetPasswordDto;
    const { user } = await this.verifyResetToken(token);

    user.resetPassword(password);
    await user.save();

    // send mail
    this.mailService.sendResetPasswordSuccessEmail({ user });

    return 'Your password has been reset!';
  }

  async verifyResetToken(token: string) {
    const hashedToken = hashToken(token);

    const now = new Date();

    const user = await this.userModel.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: now },
    });

    if (!user) {
      throw new OperationalException(
        'The reset link is either invalid or has expired. You can go back to forgot-password page to restart the process.',
        HttpStatus.EXPECTATION_FAILED,
      );
    }

    return { user, message: 'Token is valid' };
  }

  async updateCurrentUserPassword(req: Request, res: Response, user: User, updatePasswordDto: UpdatePasswordDto) {
    const userDocument = await this.userService.updateCurrentUserPassword(user, updatePasswordDto);
    // send mail
    this.mailService.sendPasswordChangedEmail({ user });
    const accessToken = await this.createAccessTokenFromUser(userDocument);
    this.setJwtCookie(req, res, accessToken);
  }
}
