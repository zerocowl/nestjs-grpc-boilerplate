export interface IUserById {
  id: number;
}

export interface IUser {
  id: number;
  fullName: string;
  email: string;
  adress: string;
}

export interface UserKey {
  PK: string;
}

export interface User extends UserKey {
  SK: string;
  userId: string;
}
