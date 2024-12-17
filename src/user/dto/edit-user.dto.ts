import { IsEmail, IsOptional, IsString } from 'class-validator';

// body form validation, it is a patch request so since we append information onto existing User the fields are optional
export class EditUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;
}
