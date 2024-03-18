import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

async createUser(email:string, password:string)
{
  const users =await this.prisma.user.findMany({
    where: {
     email,
    },
  });
  if (!users || users.length === 0)
    return this.prisma.user.create({
      data: {
       email,
       password
      }
    }) 
  throw new HttpException("user exists",HttpStatus.CONFLICT);  
 
}
    
}
