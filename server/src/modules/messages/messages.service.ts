import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { GroupUser } from '../group-user/entities/group-user.entity';

@Injectable()
export class MessagesService {
  constructor(@InjectRepository(Message) private readonly messageRepository: Repository<Message>) {}

  findByGroupUserId(groupUserId: GroupUser['id']): Promise<Message[]> {
    return this.messageRepository.find({
      where: { groupUser: { id: groupUserId } },
    });
  }
}
