import { CanActivate, ExecutionContext, Injectable, Logger, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserDocument } from 'src/common/db/mongoose-schemas/user/user.schema';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@Injectable()
export class RolesGuard implements CanActivate {
  private logger = new Logger(this.constructor.name);
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    return this.matchRoles(request.user, roles);
  }

  async matchRoles(user: UserDocument, roles: string[]): Promise<boolean> {
    this.logger.verbose(`verifying that the user has this or one of these roles: ${roles.join(', ')}`);
    return roles.includes(user.role);
  }
}
