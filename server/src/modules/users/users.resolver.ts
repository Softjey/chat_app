import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { GroupUserService } from '../group-user/group-user.service';
import { GroupUser } from '../group-user/entities/group-user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly groupUserService: GroupUserService,
  ) {}

  @ResolveField()
  async userGroups(@Parent() user: User): Promise<GroupUser[]> {
    return this.groupUserService.getByUserId(user.id);
  }
}
