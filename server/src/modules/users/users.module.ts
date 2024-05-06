import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { GroupUserModule } from '../group-user/group-user.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => GroupUserModule)],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
