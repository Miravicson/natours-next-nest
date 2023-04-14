import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/common/db/mongoose-schemas/user/user.schema';
import { ResponseFormatter } from 'src/common/lib/response-formatter';

import { ReqUser } from '../common/decorators/req-user.decorator';
import { UserService } from './user.service';

// @UseInterceptors(MorganInterceptor('combined'))
@Controller({
  path: 'user',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getCurrentUserDetails(@ReqUser() user: User) {
    return ResponseFormatter.success('User information.', user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('me')
  async updateCurrentUserNonLoginInfo(@ReqUser() user: User) {
    // do something
  }

  @UseGuards(JwtAuthGuard)
  @Patch('my-password')
  async updateCurrentUserPassword(@ReqUser() user: User): Promise<any> {
    return {
      message: 'update current user password',
    };
  }

  @Patch(':id')
  async updateUserById(): Promise<any> {
    return {
      message: 'update user by Id',
    };
  }
}
