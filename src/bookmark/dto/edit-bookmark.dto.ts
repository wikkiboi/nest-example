import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

// Check prisma schema for dto body
export class EditBookmarkDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  link?: string;
}
