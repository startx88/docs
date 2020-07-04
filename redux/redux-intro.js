/**
 * What is redux: is a state container for javascript application (single page application)
 *
 * 1. Redux is a predictable store container for js apps
 * 2. It helps to write applications that behave consistantly, run in any environment (client, server and native)
 *
 * It has below methods:
 * 1. applyMiddleware : you add third party redux supported library here
 * 2. bindActionCreators :
 * 3. combineReducers : crate multiple reducer to combine on root reducers
 * 4. compose :
 * 5. createStore : use to create store  it has several methods
 *    a. dispatch : this method use to dispatch an action (simple js object with predefine info and payload)
 *    b. getState : this method use to display the store state
 *    c. subscribe :
 *    d. replaceReduceer
 *    e. Symbol(observable)
 */

/**
  * Create your own createStore
  const createStore = reducer => {
        let state;
        let listeners = [];

        const getState = () => state;

        const dispatch = action => {
          state = reducer(state, action);
          listeners.forEach(cb => cb());
        };

        const subscribe = listener => {
          listeners.push(listener);
          return () => {
            listeners = listeners.filter(l => l != listener);
          };
        };

        dispatch({});
        
        return { getState, dispatch, subscribe };
};

  */

/**
 * 
 * How exactly compbineReducer works:
 * 
 * 1. using reducer composition object
      const todoApp = (state = {}, action) => {
          return {
              counter: counter(state.counter, action),
              todos: todos(state.todos, action),
              visibilityFilter: visibilityFilter(state.visibilityFilter, action)
          };
      }
      const store = createStore(todoApp);


   2. implementing combineReducers
      const combineReducers = reducers => {
          return (state = {}, action) => {
            return Object.keys(reducers).reduce((nextState, key) => {
              nextState[key] = reducers[key](state[key], action);
              return nextState;
            }, {});
          };
      };
};
*/

/**
 * transform-object-rest-spread
 */

/**
  * middleware
  * 1. simple middleware impletement by applyMiddleware
  * const addLoggingToDispatch = ({ dispatch, getState }) => next => action => {
    console.group(action.type);
    console.log("%c previous state", "color:green", getState());
    console.log("%c action", "color:red", action);
    console.log("%c next state", "color:green", getState());
    console.groupEnd(action.type);
    next(action);
};

  */

/**
   * import throttle from "lodash/throttle";
import { createStore } from "redux";
import { loadLocalState, saveLocalState } from "./localStorage";
import reducer from "./reducer";

const addLoggingToDispatch = ({ dispatch, getState }) => {
  return async action => {
    console.group(action.type);
    console.log("%c previous state", "color:green", getState());
    console.log("%c action", "color:red", action);
    // const resp = await fetch(action.url);
    // const data = await resp.json();
    // dispatch(action.type, action.success(data));
    const returnValue = dispatch(action);
    console.log("%c next state", "color:green", getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const configureStore = () => {
  const persistedState = loadLocalState();

  // root store
  const store = createStore(reducer, persistedState);

  if (process.env.NODE_ENV !== "production") {
    store.dispatch = addLoggingToDispatch(store);
  }
  store.subscribe(
    throttle(() => {
      saveLocalState({
        todos: store.getState().todos
      });
      console.log("%c store state", "color:blue", store.getState());
    }, 1000)
  );

  return store;
};

export default configureStore;

   */
