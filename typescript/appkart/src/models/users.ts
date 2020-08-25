import { v4 } from "uuid";

type IUSER = {
  userId: string;
  email: string;
  password: string;
};

export class User {
  USER: IUSER[];
  constructor(public email: string, password: string) {}

  addUser(email: string, password: string): void {
    this.USER.push({ userId: v4(), email, password });
  }

  removeUser(userId: string): void {
    const index = this.USER.findIndex((user: IUSER) => user.userId === userId);
    this.USER.splice(index, 1);
  }
}
