/**
 * What is typescript:
 * It is super set of javascript with static type system.
 *
 * Typescript = Javascript + Type System
 *
 * The TS Tyep System:
 * 1. Help us catch errors during development.
 * 2. Uses type anotations to analyze our code.
 * 3. Only active during development.
 * 4. Doesn't provide any performance optimization.
 *
 *
 *
 * How code works:
 * Write Typescript code (JS with type annotations)
 * Typescript compiler
 * Convert Plain old js
 *
 */

/**
 * Interface:
 * interfaces in typescript used to define the structure of an object.
 */

/**
 * Runtime behavior:
 * TypeScript is also a programming language that preserves the runtime behavior of JavaScript.
 *
 * ex:
 * Vividing by zero in JavaScript produces "Infinity" instead of throwing a runtime exception.
 * Note: As a principle, TypeScript never changes the runtime behavior of JavaScript code.
 */

/**
 * Erased Types: Roughly speaking
 * 1. Once TypeScript’s compiler is done with checking your code.
 * 2. It erases the types to produce the resulting “compiled” code.
 * 3. This means that once your code is compiled, the resulting plain JS code has no type information
 */

/**
 * What is abstract class:
 * 1. It can not create object directly.
 * 2. Only use as a parent class.
 * 3. Can contain real implementation of some methods.
 * 4. The implementation method refer to other methods that don't actually exits yet.
 * 5. Can make child classes promise to implement some other methods.
 */

interface IUser {
  fullname: string;
  email: string;
  password: string;
}
abstract class User {
  abstract users: IUser[] = [];
  abstract length: number;
  addUser(fullname: string, email: string, password: string): void {}
  deletedUser(email: string): void {
    const user = this.users.findIndex((user: IUser) => user.email === email);
  }
}
