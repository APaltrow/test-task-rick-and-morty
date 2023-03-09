import { IUser } from '@types';

export interface AuthState {
  user: null | IUser;
  isAuth: boolean;
}
