import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { GroupsResolver } from './groups.resolver';
import { GroupUser } from './entities/group-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group, GroupUser])],
  providers: [GroupsResolver],
})
export class GroupsModule {}
