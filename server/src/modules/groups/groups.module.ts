import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { GroupsResolver } from './groups.resolver';
import { GroupUser } from './entities/group-user.entity';
import { GroupsService } from './groups.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Group, GroupUser]), AuthModule],
  providers: [GroupsService, GroupsResolver],
})
export class GroupsModule {}
