import { RequestAuth } from 'src/auth/interfaces/request-auth.interface';

declare module 'express' {
  export interface Request {
    auth?: RequestAuth;
  }
}
