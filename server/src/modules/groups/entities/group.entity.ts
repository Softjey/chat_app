import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { ProfileEntity } from 'src/base-entities/profile.entity';
import { Entity, OneToMany } from 'typeorm';
import { Column } from 'typeorm';
import { GroupUser } from './group-user.entity';

export enum GroupPrivacyType {
  PRIVATE = 'private',
  PUBLIC = 'public',
}

registerEnumType(GroupPrivacyType, { name: 'GroupPrivacyType' });

@ObjectType()
@Entity()
export class Group extends ProfileEntity {
  @Field(() => GroupPrivacyType)
  @Column({ type: 'enum', enum: GroupPrivacyType })
  privacyType: GroupPrivacyType;

  @Field(() => [GroupUser])
  @OneToMany(() => GroupUser, (groupUser) => groupUser.group)
  groupUsers: GroupUser;
}
