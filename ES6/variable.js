/**
 * Javascript variables:
 *
 *
 * How to declare variables in javascript;
 * 1. using var : var has function scope.
 * 2. using let : it has block scope.
 * 3. using const : it also has block scope.
 *
 *
 * 1. Var:
 *    it has global or function scope, default is global
 *
 * A variable declaring using var is added as a non-configurable property of the global object.
 *
 *
 * var a=1;
 * globalThis.hashOwnProperty('a') // true
 * delete globalThis.a // TypeError in strict mode, Fails silently otherwise
 * delete a; // SyntaxError in strict mode, Fails silently otherwise
 *
 * Note: you can not delete var from global scope.
 *
 *
 * Non strict mode:
 * a=0;
 * console.log(a) // output 0
 * globalThis.hasOwnProperty(a) // return true
 *
 * Strict mode:
 * Throw a ReferenceError, a is not defiend,
 * to avoid the accidental creation of properties on the global object.
 *
 * 'use strict';
 * var a=0;
 * console.log(a) // output 0
 * globalThis.hasOwnProperty(a) // return true
 *
 *
 * Variable lifecycle:
 * When the javascript work with the variable, their lifecycle consists of following phase.
 * The engine proccess the variable declaration in three phases.
 * 1. Declaratino Phase.
 * 2. Initialization Phase.
 * 3. Assignment Phase.
 *
 * Declaration Phase:
 * In this phase engine register variable in its scope.
 *
 * Initialization Phase:
 * In this phase engine allocate memory and create a binding for the variable in the scope.
 * at this phase variable autometically initialize with undefined value.
 *
 * Assignment phase:
 * Assign a value to the initialized variable.
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
 *
 * undeclared: the variable is not declare in any scope.
 * undefined: variable is declared but at the time it has no value.
 * uninitialized (TDZ):  it comes with es6,
 */