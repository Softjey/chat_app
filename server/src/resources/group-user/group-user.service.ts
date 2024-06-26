import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GroupUser } from './entities/group-user.entity';
import { Group } from '../group/entities/group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { PaginationArgsI, PaginationHelper } from 'src/utils/pagination.helper';

@Injectable()
export class GroupUserService {
  constructor(
    @InjectRepository(GroupUser) private readonly groupUserRepository: Repository<GroupUser>,
  ) {}

  async getByGroupId(groupId: Group['id'], options: PaginationArgsI): Promise<GroupUser[]> {
    return this.groupUserRepository.find({
      where: { group: { id: groupId } },
      ...PaginationHelper.getPagination(options),
    });
  }

  async getByUserId(userId: User['id'], options: PaginationArgsI): Promise<GroupUser[]> {
    return this.groupUserRepository.find({
      where: { user: { id: userId } },
      ...PaginationHelper.getPagination(options),
    });
  }

  async getOneByGroupAndUserIds(
    groupId: Group['id'],
    userId: User['id'],
  ): Promise<GroupUser | null> {
    return this.groupUserRepository.findOne({
      where: { group: { id: groupId }, user: { id: userId } },
    });
  }
}
