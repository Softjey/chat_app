import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { GroupResolver } from './group.resolver';
import { GroupService } from './group.service';
import { GroupUserModule } from '../group-user/group-user.module';
import { MessageModule } from '../message/message.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Group]),
    forwardRef(() => GroupUserModule),
    forwardRef(() => MessageModule),
  ],
  providers: [GroupService, GroupResolver],
  exports: [GroupService],
})
export class GroupModule {}
