import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;
@Controller('user')
export class UserController {
constructor(private readonly userservice:UserService){}

@Post('auth')
async createUser(@Body() userDTo:UserDto)
{
    const {email,password}=userDTo;
    const hash = await bcrypt.hash(password, saltOrRounds);
    const res:any=this.userservice.createUser(email,hash);
    console.log(res)
    return res

}

}
