import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupUser } from './entities/group-user.entity';
import { GroupUserResolver } from './group-user.resolver';
import { UserModule } from 'src/resources/user/user.module';
import { GroupUserService } from './group-user.service';
import { GroupModule } from '../group/group.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([GroupUser]),
    forwardRef(() => UserModule),
    forwardRef(() => GroupModule),
  ],
  providers: [GroupUserResolver, GroupUserService],
  exports: [GroupUserService],
})
export class GroupUserModule {}
