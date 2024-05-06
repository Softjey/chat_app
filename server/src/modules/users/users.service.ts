import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserI } from './interfaces/create-user.interface';
import { GroupUser } from 'src/modules/group-user/entities/group-user.entity';

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

  async findByGroupUserId(groupUserId: GroupUser['id']) {
    return this.usersRepository.findOne({
      where: { userGroups: { id: groupUserId } },
    });
  }

  async findByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }
}
