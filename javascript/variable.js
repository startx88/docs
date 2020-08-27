/**
 * var statement declares a function scope or globally scoped variable.
 */

// Example 1:
var x = 0;
console.log(x) // output 0
if (x === 0) {
  var x = 2;
  console.log(x) // output 2
}
console.log(x) // output 2, becouse var is function scoped not block scope

// Example 2: Function example
function abc() {
  var y = 0;
  console.log(y) // output 0
}
console.log(y) // ReferenceError, y is not declared

// Example 3
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x) // output 1
    console.log(y) // output 2
  }
  bar();
  console.log(x) // output 1
  console.log(y) // ReferenceError, y is not defined
}
foo();

/** 
 * A variable declared using var is added as a non-configurable
 * property of the global object.
 * 
 * This means its property descriptor cannot be changed and it 
 * cannot be deleted, using delete
 */



/**
 * What is hoisting in js:
 * It is javascript default behavior.
 * Hoisting is a process of vertually moving the variable and function defination to the begining of the scope.
 *
 * Javascript only hoist declaration, not the initialization
 *
 * note:
 * 1. function expression can not be hoist.
 * 2. Anonymous function can not be hoist.
 * 3. let and const can not be hoist, they are uninitialized (TDZ).
 * 4. Class can not be hoist
 *
 *  Declaration –> Initialisation/Assignment –> Usage
 *
 * Strictly hoisting consists in the idea that
 * a variable is declared and initialized at the beginning of the function scope.
 * There is no gap between declaration and initialization phases.
 *
 */

/** Examples: **/
console.log(x) // x is undefined (declaration/initialization phase)
var x;
x = 90 // assignment phase

/** Javascript only hoist declaration, not the initialization */
console.log(y) // ReferenceError, there is no declration
y = 10;





/**
 * Js variable lifecycles:
 * When the js engine works with variable, their lifecycle consist of follwing phase.
 * The engine processes the variable declaration in 3 phases:
 * 1. Declaration Phase.
 * 2. Initialization Phase.
 * 3. Aissingment Phase.
 *
 *
 * 1. Declaration phase:
 *    in this phase engine register a variable in its scope.
 *
 * 2. Initialization phase:
 *    In this phase allocating memory and create a bingin for a variable in the scope.
 *    at this phase variable is autometically initialized with "undefined" value
 *
 * 3. Assignment phase:
 *    assign a value to the initialized variable.
 *
 *
 * a variable has unitialized state when variable passed the declaration phase, yet didn't reach the initialization
 *
 *
 * ** - var variable lifecycle - **
 * there is no gap b/w in declaration and initialization phase
 * []---------------------------[]
 *  - declaration phase
 *  - initialization phase
 * []--------------------------[]
 *  variable=undefined  (uninitialized state)
 * []--------------------------[]
 *  variable="value" (assignment phase)
 * []--------------------------[]
 *  variable="value"  (assigned state)
 * []--------------------------[]
 *
 *
 * Example:
 * function multiplyByTwo(num){
 *   console.log(x) // undefined
 *   var x;
 *   x=10;
 *   console.log(x) // 10
 *   return x*num;
 * }
 *
 *
 * multiplyByTwo(2);
 *
 * We run the file and function enter the execution context:global
 * Steps:
 * ------------------------------------
 *                |  Register variable in memory
 *                |  num: 2
 *      x=10      |  x = undefined
 *   return x*num /
 *
 *   final return value 20
 *
 *
 *
 *  ** - Function declaration lifecycle - **
 * The declaration, initialization and assignment phases happen
 * at once at the beginning of the enclosing function scope
 * []-------------------------------[]
 *  - declaration phase
 *  - initialization phase
 *  - assignment phase
 * []-------------------------------[]
 *  - functionName() can be invoked (assigned state)
 * []-------------------------------[]
 *
 *
 *
 * ** - Let variable lifecycle - **
 * it process differently than var. the main distinction is that
 * declaration and initialization phases are "split".
 *
 * []---------------------------[]
 *  - declaration phase
 * []--------------------------[]
 *   Accessing variable     Uninitialized state (TDZ)
 *   throws RefrenceError
 * []--------------------------[]
 *  let variable;   initialization phase
 * []--------------------------[]
 *  let variable = undefined  (initialized state)
 * []--------------------------[]
 *  let variable = 'value' (assignment phase)
 * []--------------------------[]
 *  variable = 'value'  (assignment state)
 *
 *
 * let understand the scenario:
 * When the interpreter enters a block scope that contans a let variable statement.
 * immediately the variable passed the declaration phase register its name in the scope.
 *
 * if you try to access the variable at this state, js will throw ReferenceError
 * variable not defined. it happens because the variable state is uninitialized,
 * variable is in the TDZ (temporal dead zone)
 *
 * when an assignement statement appears variable='value', the assignement phase passed.
 *
 * If JavaScript encounters let variable = 'value', then initialization and assignment happen in a single statement.
 *
 *
 *
 * Conclustion:
 * ES2015 introduces let, const, it uses an improved algorithm to declare
 * variables and additionally is blocked scope.
 *
 * Because the declaration and initialization phases are decoupled,
 * hoisting is not valid for a let variable
 * (including for const and class).
 * Before initialization,
 * the variable is in temporal dead zone and is not accessible.
 */





/**
 * undeclared: the variable is not declare in any scope.
 * undefined: variable is declared but at the time it has no value.
 * uninitialized (TDZ):  it comes with es6,
 */

