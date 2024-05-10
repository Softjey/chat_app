import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { MessageService } from './message.service';
import { GroupUserModule } from '../group-user/group-user.module';
import { MessageResolver } from './message.resolver';
import { UserModule } from '../user/user.module';
import { GroupModule } from '../group/group.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message]),
    forwardRef(() => GroupUserModule),
    forwardRef(() => UserModule),
    forwardRef(() => GroupModule),
  ],
  providers: [MessageService, MessageResolver],
  exports: [MessageService],
})
export class MessageModule {}
