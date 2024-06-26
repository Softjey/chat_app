import { Field, GraphQLISODateTime, ObjectType, registerEnumType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { ProfileEntity } from 'src/base-entities/profile/profile.entity';
import { GroupUser } from 'src/resources/group-user/entities/group-user.entity';
import { Message } from 'src/resources/message/entities/message.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
}

registerEnumType(UserRole, { name: 'UserRole' });

@ObjectType()
@Entity()
export class User extends ProfileEntity {
  @Field(() => UserRole)
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Field(() => String)
  @IsEmail()
  @Column({ unique: true })
  @Index({ unique: true })
  email: string;

  @Field(() => [GroupUser])
  @OneToMany(() => GroupUser, (groupUser) => groupUser.user)
  userGroups?: GroupUser[];

  @Field(() => [Message])
  @OneToMany(() => Message, (message) => message.user)
  messages: Message[];

  @Field(() => GraphQLISODateTime, { nullable: true })
  @Column({ type: 'datetime', nullable: true })
  lastActivity: Date | null;
}
