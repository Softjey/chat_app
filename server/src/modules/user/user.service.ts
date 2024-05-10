import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserI } from './interfaces/create-user.interface';
import { GroupUser } from 'src/modules/group-user/entities/group-user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // can be optimized
  async upsertOne(createUserDto: CreateUserI): Promise<User> {
    const user = await this.getOneByEmail(createUserDto.email);

    if (user) {
      return this.usersRepository.save({
        id: user.id,
        ...createUserDto,
      });
    }

    return this.usersRepository.save(createUserDto);
  }

  async getOneByGroupUserId(groupUserId: GroupUser['id']): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { userGroups: { id: groupUserId } },
    });
  }

  async getOneByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }
}
