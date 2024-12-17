import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Data is the argument passed in via controller/request
// request works as Express.Request
// Custom param decorator
// returns req.user taken from strategy validate
export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data] : user;
  },
);
