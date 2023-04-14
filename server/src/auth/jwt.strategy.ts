import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User, UserDocument } from 'src/common/db/mongoose-schemas/user/user.schema';
import { EnvironmentVariables } from 'src/config/env.validation';

import { JWT_COOKIE_KEY } from './constant';
import { JwtPayload } from './jwt-payload.interface';
import { fromCookieAsJwt } from './jwt.cookie.extractor';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {
    super({
      secretOrKey: configService.get('JWT_SECRET', { infer: true }),
      jwtFromRequest: ExtractJwt.fromExtractors([
        fromCookieAsJwt(JWT_COOKIE_KEY),
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { sub, iat } = payload;
    const user = (await this.userModel.findById(sub).exec()) as unknown as User;
    if (!user) {
      throw new UnauthorizedException('The user belonging to the token does not exists.');
    }

    if (user.wasPasswordChangedAfter(iat)) {
      {
        throw new UnauthorizedException(`Your password was recently changed. Please login again`);
      }
    }

    return user;
  }
}
