import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

createUser(email:string, password:string)
{
   return this.prisma.user.create({
    data: {
     email,
     password
    }
  })
}
    
}
