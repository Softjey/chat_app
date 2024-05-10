import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { GroupResolver } from './group.resolver';
import { GroupService } from './group.service';
import { GroupUserModule } from '../group-user/group-user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Group]), forwardRef(() => GroupUserModule)],
  providers: [GroupService, GroupResolver],
  exports: [GroupService],
})
export class GroupModule {}
