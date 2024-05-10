import { User } from 'src/resources/user/entities/user.entity';

declare module 'express' {
  export interface Request {
    user?: User;
  }
}
