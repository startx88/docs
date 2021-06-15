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
 * a=0;
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
 */