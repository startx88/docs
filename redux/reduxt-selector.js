/**
 * What is selector: Selector is simply a function that accept state as an argument and return data
 * Library:install reselect using npm i reselect
 */

/**
 * Why do we need to use selector:
 * 1. It is a best practice to keep your Redux store state minimal and derive data from the state as needed.
 * 2. They can compute derived data, allowing Redux to store the minimal possible state.
 * 3. Selectors are also very efficient.
 * 4. A selector is not recomputed unless one of its arguments changes.
 */

/**
 * There are two type of selector.
 * 1. Input Select: that does not use createSelector.
 * 2. Output Selector: that use input and createSelector method
 */

/**
 * How to use this
 *
 */

import { createSelector } from "reselect";

const users = state => state.user; // this is input selector

const usersList = createSelector([users], user => user);

/**
 * Memoization: Memoization is a form of caching
 * 1. The use of selectors in your application can also provide performance optimizations.
 */
