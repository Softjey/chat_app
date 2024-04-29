import { RequestUser } from 'src/modules/auth/interfaces/request-user.interface';

declare module 'express' {
  export interface Request {
    user?: RequestUser;
  }
}
