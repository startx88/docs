/********
 * What is hoisting in js:
 * It is the javascript default behavior.
 *
 * Hoisting is a process of vertually moving the variable and function
 * declaration to begining of the scope.
 *
 * OR
 *
 * Javascript move all the variable and function declarations to the top of the scope.
 *
 * Note:
 * 1. Function expression cannot be hoisted.
 * 2. Annonymous function can not be hoisted.
 * 3. let and const declarations cannot be hoisted (TDZ).
 * 4. Class can not be hoisted.
 *
 * Declaration => initialization/assignment => Usage
 *
 * Examples:
 * a=10;
 * var a;
 *
 * simple understood as:
 * var a;
 * a=10;
 *
 * Example: 2
 *
 * console.log(a) // undefined value
 * a=10;
 * var a;
 *
 * simple understood as:
 * var a;
 * console.log(a) // undefined value
 * a=10; // assignment
 *
 *
 *
 * Javascript only hoist declaration, not the initialization.
 * Ex:
 * console.log(y) // ReferenceError, there is no declaration
 * y=10;
 *
 *
 * Declaring and initializing two variables:
 * var a=1,b=2;
 *
 * Assigning two variables with single variable:
 * var a=1;
 * var b=a;
 *
 * var a,b = a = 1
 *
 */