import { Body, Controller, HttpCode, Param, Patch, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from 'src/common/db/mongoose-schemas/user/user.schema';
import { ReqUser } from 'src/common/decorators/req-user.decorator';
import { ResponseFormatter } from 'src/common/lib/response-formatter';
import { UpdatePasswordDto } from 'src/user/dto/update-password.dto';

import { AuthService } from './auth.service';
import { ConfirmEmailDto } from './dto/confirm-email.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { SignupCredentialsDto } from './dto/signup.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @Body() signupCredentialsDto: SignupCredentialsDto,
  ): Promise<any> {
    const user = await this.authService.signup(req, res, signupCredentialsDto);
    const message = 'Welcome to Natours!';
    return ResponseFormatter.success(message, user);
  }

  @Post('login')
  @HttpCode(200)
  async login(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @Body() loginDto: LoginDto,
  ): Promise<any> {
    return this.authService.login(req, res, loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('sign-out')
  @HttpCode(200)
  async signOut(@Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<any> {
    await this.authService.signOut(req, res);
    return ResponseFormatter.success('successfully signed out');
  }

  @UseGuards(JwtAuthGuard)
  @Post('confirm-email')
  async confirmEmail(@Body() confirmEmailDto: ConfirmEmailDto, @ReqUser() user: User): Promise<any> {
    const message = await this.authService.confirmSignupEmail(confirmEmailDto, user);
    return ResponseFormatter.success(message);
  }

  @UseGuards(JwtAuthGuard)
  @Post('resend-confirm-email')
  async resendConfirmEmail(@ReqUser() user: User): Promise<any> {
    const message = await this.authService.resendConfirmEmail(user);
    return ResponseFormatter.success(message);
  }

  @Post('forgot-password')
  async sendForgotPasswordEmail(@Body() forgotPasswordDto: ForgotPasswordDto): Promise<any> {
    const message = await this.authService.sendForgotPasswordEmail(forgotPasswordDto);
    return ResponseFormatter.success(message);
  }

  @Post('reset-password')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto): Promise<any> {
    const message = await this.authService.resetPassword(resetPasswordDto);
    return ResponseFormatter.success(message);
  }

  @Post('verify-reset-password/:token')
  async verifyResetToken(@Param('token') token: string) {
    const { message } = await this.authService.verifyResetToken(token);

    return ResponseFormatter.success(message);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('my-password')
  async updateCurrentUserPassword(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @ReqUser() user: User,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ): Promise<any> {
    return this.authService.updateCurrentUserPassword(req, res, user, updatePasswordDto);
  }
}
