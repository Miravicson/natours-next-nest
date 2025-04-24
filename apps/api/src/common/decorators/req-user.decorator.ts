import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { User } from '../db/mongoose-schemas/user/user.schema';

export const ReqUser = createParamDecorator((_data, ctx: ExecutionContext): User => {
  const req = ctx.switchToHttp().getRequest();
  return req.user;
});
