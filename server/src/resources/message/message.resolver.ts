import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Message } from './entities/message.entity';
import { MessageService } from './message.service';
import { GroupUserService } from '../group-user/group-user.service';
import { CreateMessageDto } from './dtos/create-message.dto';
import { ReqUser } from '../../modules/auth/decorators/req-user.decorator';
import { User } from '../user/entities/user.entity';
import { BadRequestException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../modules/auth/gurads/auth.guard';
import { UserService } from '../user/user.service';
import { Group } from '../group/entities/group.entity';
import { GroupService } from '../group/group.service';

@UseGuards(AuthGuard)
@Resolver(() => Message)
export class MessageResolver {
  constructor(
    private readonly messagesService: MessageService,
    private readonly userService: UserService,
    private readonly groupUserService: GroupUserService,
    private readonly groupService: GroupService,
  ) {}

  @Mutation(() => Message)
  async createMessage(
    @ReqUser() user: User,
    @Args('createMessageInput') { content, groupId }: CreateMessageDto,
  ) {
    const groupUser = await this.groupUserService.getOneByGroupAndUserIds(groupId, user.id);

    if (!groupUser) {
      throw new BadRequestException('Yoa are not a member of this group or group does not exist');
    }

    return this.messagesService.createOne({ content }, groupUser.id);
  }

  @ResolveField(() => User)
  async user(@Parent() message: Message) {
    return this.userService.getOneByMessageId(message.id);
  }

  @ResolveField(() => Group)
  async group(@Parent() message: Message) {
    return this.groupService.getOneByMessageId(message.id);
  }
}
