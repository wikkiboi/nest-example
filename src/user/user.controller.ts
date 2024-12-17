import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

// Guard - basically auth middleware; request must pass through guard first to determine whether it will be handled by the route handler conditionally
// JwtGuard and @GetUser moved to Typescript exporting to clean up code
// req.user or user in this case is the payload returned from validation
// We create JwtGuard
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  // getMe function is all handled via passport AuthGuard/Strategy
  // We can pass in string as an argument for what we want to return with the proper type (switch user with id: number or email: string)
  // "User" type taken from prisma-generated typing
  // GetUser returns a prisma User from strategy validate
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
