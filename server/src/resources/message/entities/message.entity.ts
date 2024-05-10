import { Field, ObjectType } from '@nestjs/graphql';
import { StableEntity } from 'src/base-entities/stable.entity';
import { GroupUser } from 'src/resources/group-user/entities/group-user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Message extends StableEntity {
  @Field(() => String)
  @Column()
  content: string;

  @Field(() => GroupUser)
  @ManyToOne(() => GroupUser, (groupUser) => groupUser.messages)
  @JoinColumn({ name: 'groupUserId' })
  groupUser?: GroupUser;
}
