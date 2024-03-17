import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService 
{
    constructor(private userService: UserService){
    }

    async validateUser(email:string, password:string):Promise<any>{
        const user=await this.userService.findeOne(email)
        if(user && user.password===password)
        {
            const {email,password, ...rest} = user;
            return rest
        }
        return null;

    }
}
