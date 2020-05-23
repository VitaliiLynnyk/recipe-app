import { IsString, MinLength, MaxLength, IsNotEmpty, IsEmail, Matches } from "class-validator";

export class AuthCredentialsDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

// @Matches(
  //   /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
  //   { message: 'password too weak' }
  // )