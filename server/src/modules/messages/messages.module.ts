import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { MessagesService } from './messages.service';
import { GroupUserModule } from '../group-user/group-user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), forwardRef(() => GroupUserModule)],
  providers: [MessagesService],
  exports: [MessagesService],
})
export class MessagesModule {}
