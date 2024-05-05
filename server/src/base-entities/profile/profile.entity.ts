import { StableEntity } from '../stable.entity';
import { Column } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class ProfileEntity extends StableEntity {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  photo?: string;
}
