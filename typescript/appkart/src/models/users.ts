import { v4 } from "uuid";

type IUser = {
  userId: string;
  email: string;
  password: string;
  insertAt: Date;
  active: boolean;
};

export class User {
  USER: IUser[] = [];
}
