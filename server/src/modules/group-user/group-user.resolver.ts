import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GroupUser } from './entities/group-user.entity';
import { UserService } from 'src/modules/user/user.service';
import { User } from '../user/entities/user.entity';
import { GroupService } from '../groups/group.service';
import { Group } from '../groups/entities/group.entity';
import { MessageService } from '../message/message.service';
import { Message } from '../message/entities/message.entity';
import { GroupUserService } from './group-user.service';
import { ReqUser } from '../auth/decorators/req-user.decorator';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/gurads/auth.guard';
import { MessagesPaginationArgs, MyGroupsPaginationArgs } from 'src/utils/pagination.helper';

@UseGuards(AuthGuard)
@Resolver(() => GroupUser)
export class GroupUserResolver {
  constructor(
    private readonly usersService: UserService,
    private readonly groupsService: GroupService,
    private readonly messagesService: MessageService,
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
    return this.usersService.getOneByGroupUserId(groupUser.id);
  }

  @ResolveField()
  async group(@Parent() groupUser: GroupUser): Promise<Group | null> {
    return this.groupsService.getByGroupUserId(groupUser.id);
  }

  @ResolveField()
  async messages(
    @Parent() groupUser: GroupUser,
    @Args() paginationOptions: MessagesPaginationArgs,
  ): Promise<Message[]> {
    return this.messagesService.getByGroupUserId(groupUser.id, paginationOptions);
  }
}
