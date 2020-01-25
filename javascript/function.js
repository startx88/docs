/**
 * What is function:
 * everty js function is a Function object. you can check with this (function(){}).constructor === Function
 *
 * Function() constructor create new function object
 * Calling the constructor directly can create functions dynamically
 * the Function constructor creates functions which execute in the global scope only.
 * The global Function object has no methods or properties of its own.
 */

/**
 * When you declare a function it has some build-in property and methods
 * Function Properties:
 * 1. length    : this property count the length of parameters
 * 2. name      : this property display the function name
 * 3. arguments : Arguments is an Array like object accessible inside function. that contain the value of arguments
 *                it alos has length property, callee and symbol.iterator method
 *                it works differently in strict mode. it does no track default parameter, rest and structured
 * 4. caller    : this has been depricated
 * 5. prototype : {}
 * 6. __proto__: f() // it inherit from Function.prototype
 * */


/**
 * Arguments: callee method
 * it contain the currently executing function,
 * It can be used to refer to the currently executing function inside the function body of that function.
 * This is useful when the name of the function is unknown, such as within a function expression with no name
 */

// recursive function
// const nn = [1, 2, 3, 4, 5, 6].map(function (n) {
//     return !(n > 1) ? 1 : (n - 1) * n;
// });
// console.log(nn) // this example will not work

// resolve with arguments.callee method
// const nn = [1, 2, 3, 4, 5, 6].map(function (n) {
//     return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
// });
// console.log(nn) // this example will not work

// this is not a good solution
// const nn = [1, 2, 3, 4, 5, 6].map(function fact(n) {
//     return !(n > 1) ? 1 : fact(n - 1) * n;
// });
// console.log(nn) // this example will work with named function


function abc(a) {
    return a * 2
}

