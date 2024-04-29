import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { RequestAuth } from './interfaces/request-auth.interface';

@Injectable()
export class AuthService {
  async identifyUser(accessToken: string) {
    try {
      const { data } = await axios.get<RequestAuth>(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${accessToken}`,
      );

      return data;
    } catch (error) {
      return null;
    }
  }
}
