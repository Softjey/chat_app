import { Length } from 'class-validator';
import { StableEntity } from './stable.entity';
import { Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class ProfileEntity extends StableEntity {
  @Field(() => String)
  @Length(1, 100)
  @Column()
  name: string;

  @Field(() => String, { nullable: true })
  @Length(1, 250)
  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  photo?: string;
}
