// call the store
const { createStore } = Redux;

// counter reducer
const counter = (state = 0, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return state + payload;
    case "DELETE":
      return state - payload;
    default:
      return state;
  }
};

// todos reducer
const todo = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return {
        id: payload.id,
        text: payload.text,
        completed: false
      };
    case "TOGGLE_TODO":
      if (state.id !== payload) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

// const todoApp = (state = {}, action) => {
//   console.log("state", state);
//   return {
//     counter: counter(state.counter, action),
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   };
// };

const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      console.log("nextState", nextState);
      console.log("key", key);
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

const reducer = combineReducers({ counter, todos, visibilityFilter });
const { dispatch, getState, subscribe } = createStore(reducer);

console.log(getState());
// Counter method
const counterIncrement = () => {
  before = 0;
  action = {
    type: "ADD",
    payload: 1
  };
  after = 1;
  dispatch(action);
  expect(counter(before, action)).toEqual(after);
};

const counterDecrement = () => {
  before = 1;
  action = {
    type: "DELETE",
    payload: 1
  };
  after = 0;
  expect(counter(before, action)).toEqual(after);
};

// Todos method
const addTodo = () => {
  before = [];
  action = {
    type: "ADD_TODO",
    payload: {
      id: 1,
      text: "Hello World"
    }
  };
  after = [{ id: 1, text: "Hello World", completed: false }];

  Object.freeze(before);
  Object.freeze(action);
  dispatch(action);
  expect(todos(before, action)).toEqual(after);
};

const toggleTodo = () => {
  const before = [
    {
      id: 1,
      text: "Hello World",
      completed: false
    },
    {
      id: 2,
      text: "Learn Redux",
      completed: false
    }
  ];

  const action = {
    type: "TOGGLE_TODO",
    payload: 1
  };

  const after = [
    {
      id: 1,
      text: "Hello World",
      completed: true
    },
    {
      id: 2,
      text: "Learn Redux",
      completed: false
    }
  ];

  deepFreeze(before);
  deepFreeze(action);
  dispatch(action);
  expect(todos(before, action)).toEqual(after);
};

//removeTodo();
counterIncrement();
counterDecrement();
addTodo();
toggleTodo();
console.log("ALL TEST PASSED", getState());
const render = () => {
  //console.log("ALL TEST PASSED", getState());
};
subscribe(render);
