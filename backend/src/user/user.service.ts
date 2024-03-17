import { Injectable } from '@nestjs/common';

export type User = {
    id:number;
    name:string;
    password:string;
    email:string;
}

@Injectable()
export class UserService {

    private readonly users:User[]=[
        {
            id:1,
            name:'name1',
            password:'pass1',
            email:"name1@gmail.com"
        },
        {
            id:2,
            name:'name2',
            password:'pass2',
            email:"name2@gmail.com"
        }
    ]

    async findeOne(email:string):Promise<User | undefined>
    {
        return this.users.find(user=>user.email==email);
    }
}
