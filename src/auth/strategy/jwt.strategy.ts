import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';

// Passport Strategy - Verify that bearer token is correct
// assigns "jwt" key to the Strategy parameter by default (append ,'jwt' to Strategy in the params)
// Add as a provider in the module as it is a dependency for AuthGuard
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //   ignoreExpiration: false by default
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  // Passport automatically creates a user object based on the value we return in validate and assigns it to Request as req.user
  // Can perform any validation/action then return payload
  // compare payload received from validate with Prisma database to see if user exists
  // prisma User is returned and assigned to req.user
  async validate(payload: { sub: number; email: string }) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
    });
    delete user.hash;

    return user;
  }
}
