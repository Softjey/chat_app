import { Field, ObjectType } from '@nestjs/graphql';
import { Length } from 'class-validator';
import { StableEntity } from 'src/base-entities/stable.entity';
import { Group } from 'src/modules/groups/entities/group.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Message extends StableEntity {
  @Field(() => String)
  @Length(1, 2000)
  @Column()
  content: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.messages)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Field(() => Group)
  @ManyToOne(() => Group, (group) => group.messages)
  @JoinColumn({ name: 'groupId' })
  group: Group;
}
