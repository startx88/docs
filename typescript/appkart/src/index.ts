interface IUser {
  length: number;
  createUser(fullname: string, email: string, password: string): void;
  updateUser(fullname: string, email: string, password: string): void;
  deleteUser(userId: string): void;
}

interface USERS {
  fullname: string;
  email: string;
  password: string;
}

class User implements IUser {
  users: USERS[] = [];
  addUser(fullname: string, email: string, password: string): void {
    this.users.push({
      fullname: fullname,
      email: email,
      password: password,
    });
    console.log("this", this.users);
  }
  get length() {
    return this.users.length;
  }
}

const s = new User();

s.addUser("pradeep kumar", "abc@gmail.com", "abc123");
s.addUser("pradeep kumar", "abc@gmail.com", "abc123");
console.log("s", s);
