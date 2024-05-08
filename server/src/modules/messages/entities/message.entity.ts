import { Field, ObjectType } from '@nestjs/graphql';
import { Length } from 'class-validator';
import { StableEntity } from 'src/base-entities/stable.entity';
import { GroupUser } from 'src/modules/group-user/entities/group-user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Message extends StableEntity {
  @Field(() => String)
  @Length(1, 2000)
  @Column()
  content: string;

  @Field(() => GroupUser)
  @ManyToOne(() => GroupUser, (groupUser) => groupUser.messages)
  @JoinColumn({ name: 'groupUserId' })
  groupUser?: GroupUser;
}
