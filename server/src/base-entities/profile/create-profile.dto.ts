import { IsOptional, IsUrl, Length } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { ProfileEntity } from './profile.entity';

@InputType()
export class CreateProfileDto {
  @Field(() => String)
  @IsOptional()
  @Length(1, 100)
  name: ProfileEntity['name'];

  @Field(() => String, { nullable: true })
  @IsOptional()
  @Length(1, 250)
  description?: ProfileEntity['description'];

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsUrl()
  photo?: ProfileEntity['photo'];
}
