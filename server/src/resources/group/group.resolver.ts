import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Group } from './entities/group.entity';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dtos/create-group.dto';
import { GroupUser } from '../group-user/entities/group-user.entity';
import { GroupUserService } from '../group-user/group-user.service';
import { GroupUsersPaginationArgs, MessagesPaginationArgs } from 'src/utils/pagination.helper';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { ReqUser } from '../../modules/auth/decorators/req-user.decorator';
import { AuthGuard } from '../../modules/auth/gurads/auth.guard';
import { User } from '../user/entities/user.entity';
import { MessageService } from '../message/message.service';
import { Message } from '../message/entities/message.entity';

@UseGuards(AuthGuard)
@Resolver(() => Group)
export class GroupResolver {
  constructor(
    private readonly groupUserService: GroupUserService,
    private readonly groupsService: GroupService,
    private readonly messageService: MessageService,
  ) {}

  @Query(() => Group)
  async group(@Args('id', { type: () => ID }) id: Group['id']): Promise<Group> {
    const group = await this.groupsService.getOneById(id);

    if (!group) {
      throw new NotFoundException(`Group with ${id} id not found`);
    }

    return group;
  }

  @Mutation(() => Group)
  createGroup(
    @ReqUser() user: User,
    @Args('createGroupInput') createGroupDto: CreateGroupDto,
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

  @ResolveField()
  async messages(
    @Parent() group: Group,
    @Args() paginationOptions: MessagesPaginationArgs,
  ): Promise<Message[]> {
    return this.messageService.getByGroupId(group.id, paginationOptions);
  }
}
