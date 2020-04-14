import { ConflictException, InternalServerErrorException } from '@nestjs/common';

import { Repository, EntityRepository } from 'typeorm';

import * as bcrypt from 'bcrypt';

import { User } from './user.entity';
import { AuthSignUpDto } from './dto/auth.signUp.dto';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authSignUpDto: AuthSignUpDto): Promise<void> {
    const { name, email, password } = authSignUpDto;

    const user = new User();
    user.name = name;
    user.email = email;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassport(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email is already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  public async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    const { email, password } = authCredentialsDto;
    const user = await this.findOne({ email });

    if (user && await user.validatePassword(password)) {
      return user.email;
    } else {
      null;
    }
  }

  private async hashPassport(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
