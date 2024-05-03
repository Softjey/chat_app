/* eslint-disable max-len */
import * as jwt from 'jsonwebtoken';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { plainToInstance } from 'class-transformer';
import { ValidationError, validateOrReject } from 'class-validator';
import { SessionDTO } from './dtos/session-dto';
import { ConfigService } from '../config/config.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {}

  private async getUserFromAccessToken(accessToken: string): Promise<SessionDTO> {
    const accessSecret = this.configService.get('accessSecret');
    const decoded = jwt.verify(accessToken, accessSecret);
    const session = plainToInstance(SessionDTO, decoded);

    await validateOrReject(session);

    return session;
  }

  async identifyUser(accessToken: string) {
    try {
      const tokenUser = await this.getUserFromAccessToken(accessToken);
      const { email, name, image } = tokenUser.user;
      const user = await this.usersService.upsertOne({
        email,
        name,
        photo: image,
      });

      return [user, tokenUser] as const;
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        throw new UnauthorizedException('Invalid access token');
      }

      if (error instanceof ValidationError) {
        const messages = error.constraints
          ? Object.values(error.constraints).join(', ')
          : error.toString();

        throw new BadRequestException('Validation failed for the token payload: ' + messages);
      }

      throw error;
    }
  }
}
