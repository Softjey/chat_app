import { Query, Resolver } from '@nestjs/graphql';
import { Group } from './entities/group.entity';

@Resolver(() => Group)
export class GroupsResolver {
  @Query(() => Group)
  getHello(): string {
    return 'Hello World!';
  }
}
