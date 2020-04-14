import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { JwtService } from '@nestjs/jwt';

import { UserRepository } from './user.repository';

import { AuthSignUpDto } from './dto/auth.signUp.dto';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) { }

  async signUp(authSignUpDto: AuthSignUpDto): Promise<void> {
    return this.userRepository.signUp(authSignUpDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const email = await this.userRepository.validateUserPassword(authCredentialsDto);

    if (!email) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
