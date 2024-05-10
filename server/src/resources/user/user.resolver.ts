import { Args, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { GroupUserService } from '../group-user/group-user.service';
import { GroupUser } from '../group-user/entities/group-user.entity';
import { MessagesPaginationArgs, UserGroupsPaginationArgs } from 'src/utils/pagination.helper';
import { Message } from '../message/entities/message.entity';
import { MessageService } from '../message/message.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly usersService: UserService,
    private readonly groupUserService: GroupUserService,
    private readonly messageService: MessageService,
  ) {}

  @ResolveField()
  async userGroups(
    @Parent() user: User,
    @Args() paginationOptions: UserGroupsPaginationArgs,
  ): Promise<GroupUser[]> {
    return this.groupUserService.getByUserId(user.id, paginationOptions);
  }

  @ResolveField()
  async messages(
    @Parent() user: User,
    @Args() paginationOptions: MessagesPaginationArgs,
  ): Promise<Message[]> {
    return this.messageService.getByUserId(user.id, paginationOptions);
  }
}
