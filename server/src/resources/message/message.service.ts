import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { GroupUser } from '../group-user/entities/group-user.entity';
import { CreateMessageI } from './interfaces/create-message.interface';
import { Group } from '../group/entities/group.entity';
import { PaginationArgsI, PaginationHelper } from 'src/utils/pagination.helper';
import { User } from '../user/entities/user.entity';

@Injectable()
export class MessageService {
  constructor(@InjectRepository(Message) private readonly messageRepository: Repository<Message>) {}

  createOne({ content }: CreateMessageI, groupUserId: GroupUser['id']): Promise<Message> {
    return this.messageRepository.save({
      content,
      groupUser: { id: groupUserId },
    });
  }

  async getByGroupId(groupId: Group['id'], options: PaginationArgsI): Promise<Message[]> {
    return this.messageRepository.find({
      where: { group: { id: groupId } },
      order: { createdAt: 'DESC' },
      ...PaginationHelper.getPagination(options),
    });
  }

  async getByUserId(userId: User['id'], options: PaginationArgsI): Promise<Message[]> {
    return this.messageRepository.find({
      where: { user: { id: userId } },
      order: { createdAt: 'DESC' },
      ...PaginationHelper.getPagination(options),
    });
  }
}
