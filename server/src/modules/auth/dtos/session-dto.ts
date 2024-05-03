import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, IsUrl, ValidateNested } from 'class-validator';

class SessionUserDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsUrl()
  image: string;
}

export class SessionDTO {
  @ValidateNested()
  @Type(() => SessionUserDTO)
  user: SessionUserDTO;

  @IsNotEmpty()
  @IsString()
  expires: string;

  @IsNotEmpty()
  iat: number;

  @IsNotEmpty()
  exp: number;
}
