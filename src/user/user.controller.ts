import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';

@Controller('users')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('me')
  getUser(@GetUser() user) {
    return user;
  }
}
