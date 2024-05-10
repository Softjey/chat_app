import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GroupUser } from './entities/group-user.entity';
import { UserService } from 'src/resources/user/user.service';
import { User } from '../user/entities/user.entity';
import { GroupService } from '../group/group.service';
import { Group } from '../group/entities/group.entity';
import { GroupUserService } from './group-user.service';
import { ReqUser } from '../../modules/auth/decorators/req-user.decorator';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../modules/auth/gurads/auth.guard';
import { MyGroupsPaginationArgs } from 'src/utils/pagination.helper';

@UseGuards(AuthGuard)
@Resolver(() => GroupUser)
export class GroupUserResolver {
  constructor(
    private readonly usersService: UserService,
    private readonly groupsService: GroupService,
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
}
