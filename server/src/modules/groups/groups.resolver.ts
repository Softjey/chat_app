import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Group } from './entities/group.entity';
import { GroupsService } from './groups.service';
import { User } from '../users/entities/user.entity';
import { CreateGroupDto } from './dtos/create-group.dto';
import { ReqUser } from '../auth/decorators/req-user.decorator';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/gurads/auth.guard';

@Resolver(() => Group)
export class GroupsResolver {
  constructor(private readonly groupsService: GroupsService) {}

  @Query(() => String)
  hello(): string {
    return 'Hello World!';
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Group)
  createGroup(
    @ReqUser() user: User,
    @Args('createGroupDto') createGroupDto: CreateGroupDto,
  ): Promise<Group> {
    return this.groupsService.createGroup(createGroupDto, user.id);
  }
}
