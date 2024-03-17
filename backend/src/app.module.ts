import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UsersController } from './users/users.controller';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule],
  controllers: [UsersController],
})
export class AppModule {}
