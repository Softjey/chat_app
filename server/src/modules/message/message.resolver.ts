import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Message } from './entities/message.entity';
import { MessageService } from './message.service';
import { GroupUserService } from '../group-user/group-user.service';
import { CreateMessageDto } from './dtos/create-message.dto';
import { ReqUser } from '../auth/decorators/req-user.decorator';
import { User } from '../user/entities/user.entity';
import { BadRequestException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/gurads/auth.guard';

@UseGuards(AuthGuard)
@Resolver(() => Message)
export class MessageResolver {
  constructor(
    private readonly messagesService: MessageService,
    private readonly groupUserService: GroupUserService,
  ) {}

  @Mutation(() => Message)
  async createMessage(
    @ReqUser() user: User,
    @Args('createMessageInput') { content, groupId }: CreateMessageDto,
  ) {
    const groupUser = await this.groupUserService.getOneByGroupAndUserIds(groupId, user.id);

    if (!groupUser) {
      throw new BadRequestException('You are not a member of this group');
    }

    return this.messagesService.createOne({ content }, groupUser.id);
  }

  @ResolveField()
  async groupUser(@Parent() message: Message) {
    return this.groupUserService.getOneByMessageId(message.id);
  }
}
