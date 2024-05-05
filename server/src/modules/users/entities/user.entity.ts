import { Field, GraphQLISODateTime, ObjectType, registerEnumType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { ProfileEntity } from 'src/base-entities/profile.entity';
import { GroupUser } from 'src/modules/groups/entities/group-user.entity';
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
  userGroups: GroupUser[];

  @Field(() => GraphQLISODateTime, { nullable: true })
  @Column({ type: 'datetime', nullable: true })
  lastActivity: Date | null;
}
