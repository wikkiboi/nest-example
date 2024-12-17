import { AuthGuard } from '@nestjs/passport';

// npm i @nestjs/passport passport @nestjs/jwt passport-jwt
// npm i -D @types/passport-jwt
// AuthGuard has multiple passport strategies. We call 'jwt' for the jwt specific strategy
export class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
