import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Message } from './entities/message.entity';
import { MessagesService } from './messages.service';
import { GroupUserService } from '../group-user/group-user.service';

@Resolver(() => Message)
export class MessageResolver {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly groupUserService: GroupUserService,
  ) {}

  @ResolveField()
  async groupUser(@Parent() message: Message) {
    return this.groupUserService.getByMessageId(message.id);
  }
}
