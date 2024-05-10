import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsEnum } from 'class-validator';
import { Group, GroupPrivacyType } from '../entities/group.entity';
import { CreateProfileDto } from 'src/base-entities/profile/create-profile.dto';

@InputType()
export class CreateGroupDto extends CreateProfileDto {
  @Field(() => GroupPrivacyType, { nullable: true })
  @IsOptional()
  @IsEnum(GroupPrivacyType)
  privacyType?: Group['privacyType'];
}
