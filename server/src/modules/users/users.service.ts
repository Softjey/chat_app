import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserI } from './interfaces/create-user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // can be optimized
  async upsertOne(createUserDto: CreateUserI): Promise<User> {
    const user = await this.findByEmail(createUserDto.email);

    if (user) {
      return this.usersRepository.save({
        id: user.id,
        ...createUserDto,
      });
    }

    return this.usersRepository.save(createUserDto);
  }

  async findByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }
}
