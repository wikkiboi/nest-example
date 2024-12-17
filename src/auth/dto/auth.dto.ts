import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// npm i class-validator class-transformer
// Decorator based validation combined w/ nestjs pipe
// body form validation for signup/signin
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
