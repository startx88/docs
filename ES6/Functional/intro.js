/******
 * What is functional progrmming:
 * 1. It is a process of writing software by composing pure functions, avoiding shared state, side-effects and mutability.
 * 2. Funcional programming is declarative rather than imperative.
 * 3. Application state flows through pure functions.
 *
 *
 * Functional programming concepts:
 * 1. Avoid side effects.
 * 2. Avoid shared state.
 * 3. Avoid mutable data.
 * 4. Use Pure functions.
 * 5. Use Function composition.
 * 6. Use Declarative code instead of imperative code.
 *
 *
 * ** Avoid side effects **
 *
 *  this function is not pure.
 *  this using global variable.
 *  using global scoped variable.
 * let cnt=0;
 * let increment = function(){
 *   cnt++;
 *   return cnt;
 * }
 *
 * // it is pure functions.
 * let cnt=0;
 * let increment2 = function(cnt){
 *  return cnt++;
 * }
 * increment(cnt);
 *
 *
 *
 *
 *
 * What are pure functions:
 * 1. The function depends on the input provided and not external data that changes.
 * 2. The function doesn't cause side effects. It dosent's cause change beyond its scope.
 * 3. Given the same input, the function will always return the same output.
 * 4. The function doesn't use any shared state.
 *
 *
 * What are side effects:
 * 1. Changing the value globally (variable, property or data structure).
 * 2. Changing the original value of a functions arguments.
 * 3. Throwing an exception.
 * 4. Printing to the Screen or Logging.
 * 5. Triggring an external process.
 * 6. Invoking other functions that have side-effects.
 *
 * 
 * Shared state:
 * it is any variable, object, or memory space that exist in a shared scope,or as the property of an object being passed between scopes.
 * A shared scope can include global scope or closure scopes. (Eric Elliott)
 * 
 * */


let userIndex = 0,
  users = [{ name: 'pradeep', scores: 100, rank: 1 }, { name: 'Sanjeev', scores: 50, rank: 5 }, { name: 'Arun', scores: 30, rank: 3 }];





