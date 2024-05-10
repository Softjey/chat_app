import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { GroupUser, UserGroupRole } from '../group-user/entities/group-user.entity';
import { CreateGroupDto } from './dtos/create-group.dto';
import { Message } from '../message/entities/message.entity';

@Injectable()
export class GroupService {
  constructor(@InjectRepository(Group) private readonly groupRepository: Repository<Group>) {}

  async createOneWithInitialOwner(
    createGroupDto: CreateGroupDto,
    userId: User['id'],
  ): Promise<Group> {
    return this.groupRepository.manager.transaction(async (manager) => {
      const group = await manager.save(Group, createGroupDto);

      await manager.save(GroupUser, {
        user: { id: userId },
        group: { id: group.id },
        userRole: UserGroupRole.OWNER,
      });

      return group;
    });
  }

  async getOneById(id: Group['id']): Promise<Group | null> {
    return this.groupRepository.findOne({ where: { id } });
  }

  async getByGroupUserId(groupUserId: GroupUser['id']): Promise<Group | null> {
    return this.groupRepository.findOne({
      where: { groupUsers: { id: groupUserId } },
    });
  }

  async getOneByMessageId(messageId: Message['id']): Promise<Group | null> {
    return this.groupRepository.findOne({
      where: { messages: { id: messageId } },
    });
  }
}
