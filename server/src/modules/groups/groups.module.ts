import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { GroupsResolver } from './groups.resolver';
import { GroupsService } from './groups.service';
import { AuthModule } from '../auth/auth.module';
import { GroupUserModule } from '../group-user/group-user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Group]), forwardRef(() => GroupUserModule), AuthModule],
  providers: [GroupsService, GroupsResolver],
  exports: [GroupsService],
})
export class GroupsModule {}
