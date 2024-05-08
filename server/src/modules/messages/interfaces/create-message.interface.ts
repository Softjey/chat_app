import { Message } from '../entities/message.entity';

export interface CreateMessageI {
  content: Message['content'];
}
