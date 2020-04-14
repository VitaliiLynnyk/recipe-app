import { Repository, EntityRepository } from 'typeorm';

import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { name, email, password } = authCredentialsDto;

    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;

    await user.save();
  }
}
