import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { GroupUser, UserGroupRole } from '../group-user/entities/group-user.entity';
import { CreateGroupDto } from './dtos/create-group.dto';

@Injectable()
export class GroupsService {
  constructor(@InjectRepository(Group) private readonly groupRepository: Repository<Group>) {}

  async createGroup(createGroupDto: CreateGroupDto, userId: User['id']): Promise<Group> {
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

  async findByGroupUserId(groupUserId: GroupUser['id']): Promise<Group | null> {
    return this.groupRepository.findOne({
      where: { groupUsers: { id: groupUserId } },
    });
  }
}
