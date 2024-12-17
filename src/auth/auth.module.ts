import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy';

@Module({
  // Add as a dependency for the module
  imports: [JwtModule.register({})],
  // Routes
  controllers: [AuthController],
  //The classes/functions that can be injected into other classes within the module - these files have @Injectable
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
