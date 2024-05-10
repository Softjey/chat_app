import { Field, ID, InputType } from '@nestjs/graphql';
import { Message } from '../entities/message.entity';
import { Group } from 'src/modules/group/entities/group.entity';
import { IsUUID, Length } from 'class-validator';

@InputType()
export class CreateMessageDto {
  @Field(() => String)
  @Length(1, 2000)
  content: Message['content'];

  @Field(() => ID)
  @IsUUID()
  groupId: Group['id'];
}
