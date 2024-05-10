import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupUser } from './entities/group-user.entity';
import { GroupUserResolver } from './group-user.resolver';
import { UserModule } from 'src/modules/user/user.module';
import { GroupUserService } from './group-user.service';
import { GroupModule } from '../groups/group.module';
import { MessageModule } from '../message/message.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([GroupUser]),
    forwardRef(() => UserModule),
    forwardRef(() => GroupModule),
    forwardRef(() => MessageModule),
  ],
  providers: [GroupUserResolver, GroupUserService],
  exports: [GroupUserService],
})
export class GroupUserModule {}
