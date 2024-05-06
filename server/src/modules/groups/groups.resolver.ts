import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Group } from './entities/group.entity';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dtos/create-group.dto';
import { GroupUser } from '../group-user/entities/group-user.entity';
import { GroupUserService } from '../group-user/group-user.service';

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

  // @UseGuards(AuthGuard)
  @Mutation(() => Group)
  createGroup(
    // @ReqUser() user: User,
    @Args('createGroupDto') createGroupDto: CreateGroupDto,
  ): Promise<Group> {
    return this.groupsService.createGroup(createGroupDto, 'a8362cbb-5339-4757-9e81-7953dda1c7c9');
  }

  @ResolveField()
  groupUsers(@Parent() group: Group): Promise<GroupUser[]> {
    return this.groupUserService.getByGroupId(group.id);
  }
}
