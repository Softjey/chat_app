import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { GroupUser } from '../group-user/entities/group-user.entity';
import { CreateMessageI } from './interfaces/create-message.interface';

@Injectable()
export class MessageService {
  constructor(@InjectRepository(Message) private readonly messageRepository: Repository<Message>) {}

  createOne({ content }: CreateMessageI, groupUserId: GroupUser['id']): Promise<Message> {
    return this.messageRepository.save({
      content,
      groupUser: { id: groupUserId },
    });
  }
}
