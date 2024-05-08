import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Group } from './entities/group.entity';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dtos/create-group.dto';
import { GroupUser } from '../group-user/entities/group-user.entity';
import { GroupUserService } from '../group-user/group-user.service';
import { GroupUsersPaginationArgs } from 'src/utils/pagination.helper';
import { UseGuards } from '@nestjs/common';
import { ReqUser } from '../auth/decorators/req-user.decorator';
import { AuthGuard } from '../auth/gurads/auth.guard';
import { User } from '../users/entities/user.entity';

@UseGuards(AuthGuard)
@Resolver(() => Group)
export class GroupsResolver {
  constructor(
    private readonly groupUserService: GroupUserService,
    private readonly groupsService: GroupsService,
  ) {}

  @Query(() => String)
  hello(): string {
    return 'Hello World!';
  }

  @Mutation(() => Group)
  createGroup(
    @ReqUser() user: User,
    @Args('createGroupDto') createGroupDto: CreateGroupDto,
  ): Promise<Group> {
    return this.groupsService.createOneWithInitialOwner(createGroupDto, user.id);
  }

  @ResolveField()
  groupUsers(
    @Parent() group: Group,
    @Args() paginationOptions: GroupUsersPaginationArgs,
  ): Promise<GroupUser[]> {
    return this.groupUserService.getByGroupId(group.id, paginationOptions);
  }
}
