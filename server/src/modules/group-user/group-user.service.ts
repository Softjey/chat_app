import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GroupUser } from './entities/group-user.entity';
import { Group } from '../groups/entities/group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '../messages/entities/message.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class GroupUserService {
  constructor(
    @InjectRepository(GroupUser) private readonly groupUserRepository: Repository<GroupUser>,
  ) {}

  async getByGroupId(groupId: Group['id']): Promise<GroupUser[]> {
    const groupUsers = await this.groupUserRepository.find({
      where: { group: { id: groupId } },
    });

    return groupUsers;
  }

  async getByMessageId(messageId: Message['id']) {
    return this.groupUserRepository.findOne({
      where: { messages: { id: messageId } },
    });
  }

  async getByUserId(userId: User['id']) {
    return this.groupUserRepository.findOne({
      where: { user: { id: userId } },
    });
  }
}
