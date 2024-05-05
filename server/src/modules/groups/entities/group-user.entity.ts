import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { StableEntity } from 'src/base-entities/stable.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Group } from './group.entity';
import { User } from 'src/modules/users/entities/user.entity';

export enum UserGroupRole {
  ADMIN = 'admin',
  MEMBER = 'member',
}

registerEnumType(UserGroupRole, { name: 'UserGroupRole' });

@ObjectType()
@Entity()
export class GroupUser extends StableEntity {
  @Field(() => UserGroupRole)
  @Column({
    type: 'enum',
    enum: UserGroupRole,
    default: UserGroupRole.MEMBER,
  })
  userRole: UserGroupRole;

  @Field(() => Group)
  @ManyToOne(() => Group, (group) => group.groupUsers)
  @JoinColumn({ name: 'groupId' })
  group: Group;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.userGroups)
  @JoinColumn({ name: 'userId' })
  user: User;
}