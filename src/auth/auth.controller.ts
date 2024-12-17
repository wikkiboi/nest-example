import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

// Controller receives the request ex. post request and then calls the service function then returns response to the user/client (similar to routes/controller in express)
// Controller instantiates an instance of the service to call the function via dependency injection
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @Req reaches into Express for req
  // Usually use @Body for framework compatibility outside of express
  // DTO - Data Transfer Object where you push your data from a request for validation
  // Install argon2 for password hashing
  // We create AuthDto
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
