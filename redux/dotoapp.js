//const { createStore } = Redux;

// visibility filter todo
const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

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

const todo = (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD":
      return {
        id: payload.id,
        text: payload.text,
        completed: payload.completed
      };
    case "DELETE":
      return state.filter(todo => todo.id !== payload);
    case "TOGGLE":
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
  const { payload } = action;
  switch (action.type) {
    case "ADD":
      return [...state, todo(undefined, action)];
    case "DELETE":
      return todo(state, action);
    case "TOGGLE":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const filterTodo = ({ todos }, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      // console.log("c", todos);
      return todos.filter(todo => todo.completed);
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

// root reducer
const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      //  console.log(nextState);
      return nextState;
    }, {});
  };
};

const reducer = combineReducers({ counter, todos, visibilityFilter });

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

  dispatch({});
  return { getState, dispatch, subscribe };
};

// stores
const { getState, dispatch, subscribe } = createStore(reducer);

// Render app
const render = () => {
  const states = filterTodo(getState(), "SHOW_ALL");
  console.log("st", states);
  document.body.innerHTML = JSON.stringify(
    { ...getState(), todos: states },
    null,
    4
  );
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

dispatch({
  type: "ADD",
  payload: {
    id: 2,
    text: "Learn css",
    completed: true
  }
});

dispatch({
  type: "ADD",
  payload: {
    id: 3,
    text: "Learn Redux",
    completed: true
  }
});

dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_COMPLETED"
});
