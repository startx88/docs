//const { createStore } = Redux;

// Reducers
const counter = (state = 0, action) => {
  const { payload } = action;
  switch (action.type) {
    case "INC":
      return state + payload;
    case "DEC":
      return state - payload;
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD":
      return [...state, payload];
    case "DELETE":
      return state.filter(todo => todo.id !== payload);
    case "TOGGLE":
      return state.map(todo => {
        if (todo !== payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed
        };
      });
    default:
      return state;
  }
};

// root reducer
const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

const reducer = combineReducers({ counter, todos });

// create store
const createStore = reducer => {
  let state;
  const listeners = [];
  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(li => li());
  };

  const subscribe = cb => {
    listeners.push(cb);
    return () => {
      listeners = listeners.filter(l => l != cb);
    };
  };
  return { getState, dispatch, subscribe };
};

// stores
const { getState, dispatch, subscribe } = createStore(reducer);

// Render app
const render = () => {
  document.body.innerHTML = JSON.stringify(getState(), null, 4);
};
subscribe(render);
render();
dispatch({
  type: "INC",
  payload: 1
});

dispatch({
  type: "ADD",
  payload: {
    id: 1,
    text: "Hello World",
    completed: false
  }
});
