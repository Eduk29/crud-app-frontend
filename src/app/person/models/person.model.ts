import { User } from 'src/app/user/model/user.model';

export interface Person {
  age: number;
  birthday: string;
  id: number;
  name: string;
  user?: User;
}
