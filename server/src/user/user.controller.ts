import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/common/db/mongoose-schemas/user/user.schema';
import { ResponseFormatter } from 'src/common/lib/response-formatter';

import { ReqUser } from '../common/decorators/req-user.decorator';
import { UpdateLoggedInUserDto } from './dto/update-loggedin-user.dto';
import { updateSignedInUserPhotoValidator } from './dto/uploaded-signed-in-user-photo.validator';
import { Roles, RolesGuard } from './roles.guard';
import { UserService } from './user.service';

@Controller({
  path: ['user', 'users'],
  version: '1',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/')
  async getAllUsers() {
    const response = await this.userService.getAllUsers();
    return ResponseFormatter.success('Users', response);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getCurrentUserDetails(@ReqUser() user: User) {
    return ResponseFormatter.success('User information.', user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('me')
  @UseInterceptors(FileInterceptor('photo'))
  async updateCurrentUserNonLoginInfo(
    @ReqUser() user: User,
    @Body() updateLoggedInUserDto: UpdateLoggedInUserDto,
    @UploadedFile(updateSignedInUserPhotoValidator)
    photo?: Express.Multer.File,
  ) {
    const response = await this.userService.updateUserNonLoginInfo(user, updateLoggedInUserDto, photo);
    return ResponseFormatter.success('User information.', response);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('me')
  @HttpCode(204)
  async deleteSignedInUser(@ReqUser() user: User) {
    await this.userService.deleteUser(user);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  async getUserById(@Param('id') userId: string) {
    const response = await this.userService.getUserById(userId);
    return ResponseFormatter.success('User information.', response);
  }

  @UseInterceptors(FileInterceptor('photo'))
  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  async updateUserById(
    @Param('id') userId: string,
    @Body() updateLoggedInUserDto: UpdateLoggedInUserDto,
    @ReqUser() adminUser: User,
    @UploadedFile(updateSignedInUserPhotoValidator) photo?: Express.Multer.File,
  ): Promise<any> {
    const response = await this.userService.updateUserById(adminUser, userId, updateLoggedInUserDto, photo);
    return ResponseFormatter.success('User information.', response);
  }

  @UseInterceptors(FileInterceptor('photo'))
  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  @HttpCode(204)
  async deleteUserById(@Param('id') userId: string, @ReqUser() adminUser: User): Promise<any> {
    await this.userService.deleteUserById(adminUser, userId);
  }

  @Roles('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id/activate')
  async activateUser(@Param('id') userId: string) {
    const response = await this.userService.activateUser(userId);
    return ResponseFormatter.success('User information.', response);
  }
}
