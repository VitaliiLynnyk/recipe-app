import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

import { AuthCredentialsDto } from './auth-credentials.dto';

export class AuthSignUpDto extends AuthCredentialsDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  name: string;

  constructor() {
    super();
  }
}