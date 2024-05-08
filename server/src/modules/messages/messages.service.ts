import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { GroupUser } from '../group-user/entities/group-user.entity';
import { PaginationArgsI, PaginationHelper } from 'src/utils/pagination.helper';

@Injectable()
export class MessagesService {
  constructor(@InjectRepository(Message) private readonly messageRepository: Repository<Message>) {}

  getByGroupUserId(groupUserId: GroupUser['id'], options: PaginationArgsI): Promise<Message[]> {
    const pagination = PaginationHelper.getPagination(options);

    return this.messageRepository.find({
      where: { groupUser: { id: groupUserId } },
      ...pagination,
    });
  }
}
