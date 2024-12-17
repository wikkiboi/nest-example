import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

// Check prisma schema for dto body
export class CreateBookmarkDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  link: string;
}
