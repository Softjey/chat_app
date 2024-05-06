import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { GroupUser } from './entities/group-user.entity';
import { UsersService } from 'src/modules/users/users.service';
import { User } from '../users/entities/user.entity';
import { GroupsService } from '../groups/groups.service';
import { Group } from '../groups/entities/group.entity';
import { MessagesService } from '../messages/messages.service';
import { Message } from '../messages/entities/message.entity';

@Resolver(() => GroupUser)
export class GroupUserResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly groupsService: GroupsService,
    private readonly messagesService: MessagesService,
  ) {}

  @ResolveField()
  async user(@Parent() groupUser: GroupUser): Promise<User | null> {
    return this.usersService.findByGroupUserId(groupUser.id);
  }

  @ResolveField()
  async group(@Parent() groupUser: GroupUser): Promise<Group | null> {
    return this.groupsService.findByGroupUserId(groupUser.id);
  }

  @ResolveField()
  async messages(@Parent() groupUser: GroupUser): Promise<Message[]> {
    return this.messagesService.findByGroupUserId(groupUser.id);
  }
}
