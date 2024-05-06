import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupUser } from './entities/group-user.entity';
import { GroupUserResolver } from './group-user.resolver';
import { UsersModule } from 'src/modules/users/users.module';
import { GroupUserService } from './group-user.service';
import { GroupsModule } from '../groups/groups.module';
import { MessagesModule } from '../messages/messages.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([GroupUser]),
    forwardRef(() => UsersModule),
    forwardRef(() => GroupsModule),
    forwardRef(() => MessagesModule),
  ],
  providers: [GroupUserResolver, GroupUserService],
  exports: [GroupUserService],
})
export class GroupUserModule {}
