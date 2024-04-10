import { IsEmail } from "class-validator";

/* eslint-disable prettier/prettier */
export class UserDto {
  @IsEmail()
  email: string;
  
  password: string;
}
