import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GroupUser } from './entities/group-user.entity';
import { UsersService } from 'src/modules/users/users.service';
import { User } from '../users/entities/user.entity';
import { GroupsService } from '../groups/groups.service';
import { Group } from '../groups/entities/group.entity';
import { MessagesService } from '../messages/messages.service';
import { Message } from '../messages/entities/message.entity';
import { GroupUserService } from './group-user.service';
import { ReqUser } from '../auth/decorators/req-user.decorator';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/gurads/auth.guard';
import { MessagesPaginationArgs, MyGroupsPaginationArgs } from 'src/utils/pagination.helper';

@UseGuards(AuthGuard)
@Resolver(() => GroupUser)
export class GroupUserResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly groupsService: GroupsService,
    private readonly messagesService: MessagesService,
    private readonly groupUserService: GroupUserService,
  ) {}

  @Query(() => [GroupUser])
  getMyGroups(
    @ReqUser() user: User,
    @Args() paginationOptions: MyGroupsPaginationArgs,
  ): Promise<GroupUser[]> {
    return this.groupUserService.getByUserId(user.id, paginationOptions);
  }

  @ResolveField()
  async user(@Parent() groupUser: GroupUser): Promise<User | null> {
    return this.usersService.findByGroupUserId(groupUser.id);
  }

  @ResolveField()
  async group(@Parent() groupUser: GroupUser): Promise<Group | null> {
    return this.groupsService.findByGroupUserId(groupUser.id);
  }

  @ResolveField()
  async messages(
    @Parent() groupUser: GroupUser,
    @Args() paginationOptions: MessagesPaginationArgs,
  ): Promise<Message[]> {
    return this.messagesService.findByGroupUserId(groupUser.id, paginationOptions);
  }
}
