/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import * as bcrypt from 'bcrypt';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()

export class UserService {
  
  constructor(private readonly prisma: PrismaService) {}

  async createUser(email: string, password: string) {
    // const users = await this.prisma.user.findMany({
    //   where: {
    //     email,
    //   },
    // });
    // if (!users || users.length === 0) {
    //   const usern = this.prisma.user.create({
    //     data: {
    //       email,
    //       password,
    //     },
    //   });
    //   delete (await usern).password;
    //   return usern;
    // }
    // throw new HttpException('user exists', HttpStatus.CONFLICT);
    try {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(password, saltOrRounds);
      const user = await this.prisma.user.create({
        data: {
          email,
         password:hash,
        },
      });
      delete user.password;
      delete user.createdAt;
      delete user.updatedAt;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new HttpException('User Exist', HttpStatus.EXPECTATION_FAILED);
      }
      throw new HttpException("error", HttpStatus.BAD_GATEWAY);
    }
  }

  async signinUser(email: string, password: string) {
    try {
      const userIn = await this.prisma.user.findFirst({
        where: {
          email,
        },
      });
      const match = await bcrypt.compare(password, userIn.password);
      if (match) {
        delete userIn.password;
        delete userIn.createdAt;
        delete userIn.updatedAt;
        return userIn;
      } else return false;
    } catch (error) {
      throw new HttpException('No User Found', HttpStatus.EXPECTATION_FAILED);
    }
  }
}
