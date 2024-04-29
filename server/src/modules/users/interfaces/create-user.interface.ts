import { User } from '../user.entity';

export interface CreateUserI {
  email: User['email'];
  name: User['name'];
  photo?: User['photo'];
  role?: User['role'];
  description?: User['description'];
}
