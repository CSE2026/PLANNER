import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {}
