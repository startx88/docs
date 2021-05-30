/**
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript
 * What is Javascript:
 * 1.   Javascript is lightweight, interpreted or Just in time compile language.
 * 2.   Compiled language with first class function.
 * 3.   Javscript is a prototype-based, multi-paradigm, single threaded dynamic language supporting object oriented.
 */

/**
 * Why javascript is first class function language?
 * A programming language said to first class function
 * when function in this progrmming language treated like any other variable.
 *
 * 1. A function can be passed as an argument into other function.
 * 2. A function can be assigned to a variable.
 * 3. A function can returned to another function.
 *
 * * Assign a function to a variable
 *  Ex:
 *  const foo = function() {
 *      console.log("foobar");
 *   }
 *  // Invoke it using the variable
 *  foo();
 *
 *  Note: We assigned an Anonymous Function in a Variable
 *
 *
 * * Pass a function as an Argument
 *  Ex:
 *  function sayHello() {
 *     return "Hello, ";
 *  }
 *  function greeting(helloMessage, name) {
 *    console.log(helloMessage() + name);
 *  }
 *  // Pass `sayHello` as an argument to `greeting` function
 *  greeting(sayHello, "JavaScript!");
 *
 * Note: The function that we pass as an argument to another function, is called a Callback function. sayHello is a Callback function.
 *
 *
 * * Return a function
 * Ex:
 * function sayHello() {
 *      return function() {
 *          console.log("Hello!");
 *      }
 *  }
 *
 * Note: A function that returns a function is called a Higher-Order Function.
 *
 */


/**
 * What is JavaScript doing on your page?
 */
