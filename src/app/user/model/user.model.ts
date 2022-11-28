export interface User {
  id: number;
  roles: any;
  username: string;
  password: string;
  loginCount: number;
  roleList: string[];
}
