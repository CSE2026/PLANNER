import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';



@Controller('user')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Post('signup')
  async createUser(@Body() userDto: UserDto) {
    const { email, password } = userDto;
 
    const res: any = this.userservice.createUser(email, password);
    return res;
  }

  @Post('signin')
  async loginUser(@Body() UserDto: UserDto) {
    const { email, password } = UserDto;
    const res: any = this.userservice.signinUser(email, password);
    console.log(res);
    return res;
  }
}
