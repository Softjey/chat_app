/* eslint-disable max-len */
import { Injectable } from '@nestjs/common';
import axios, { AxiosError } from 'axios';
import { UsersService } from '../users/users.service';
import { GoogleProfileResponse } from './interfaces/google-profile-response.interface';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async identifyUser(accessToken: string) {
    const googleResponse = await this.getProfileInfo(accessToken);

    if (!googleResponse) {
      return null;
    }

    const { emailAddresses, names, photos } = googleResponse;
    const user = await this.usersService.upsertOne({
      email: emailAddresses[0].value,
      name: names[0].displayName,
      photo: photos[0].url,
    });

    return user;
  }

  async getProfileInfo(accessToken: string) {
    try {
      const getProfileUrl = `https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos`;
      const { data: userData } = await axios.get<GoogleProfileResponse>(
        getProfileUrl,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );

      return userData;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        console.log('Unauthorized access');
        return null;
      }

      throw error;
    }
  }
}
