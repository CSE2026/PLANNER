import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { PrismaModule } from './prisma/prisma.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, ActivityModule],
  controllers: [UserController],
})
export class AppModule {}
