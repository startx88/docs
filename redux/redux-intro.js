/**
 * What is redux:
 * 1. Redux is a predictable store container for js apps
 * 2. It helps to write applications that behave consistantly, run in any environment (client, server and native)
 */
const redux = require("redux");

const createStores = redux.createStore;

const reducer = (state = { count: 0 }, action) => {
  if (action.type === "ADDD") {
    return {
      ...state,
      count: state.count + action.value
    };
  }
  return state;
};

const store = createStores(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "ADDD", value: 1 });
store.dispatch({ type: "ADDD", value: 1 });
store.dispatch({ type: "ADDD", value: 1 });
store.dispatch({ type: "ADDD", value: 1 });
