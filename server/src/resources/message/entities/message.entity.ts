import { Field, ObjectType } from '@nestjs/graphql';
import { StableEntity } from 'src/base-entities/stable.entity';
import { Group } from 'src/resources/group/entities/group.entity';
import { User } from 'src/resources/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Message extends StableEntity {
  @Field(() => String)
  @Column()
  content: string;

  @Field(() => Group)
  @ManyToOne(() => Group, (group) => group.messages)
  group?: Group;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.messages)
  user?: User;
}
