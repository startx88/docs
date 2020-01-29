import { createStore, combineReducers } from "redux";

export const constants = {
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER",
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  TOGGLE: "TOGGLE"
};

export const visibility = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case constants.SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return [...state, action.payload];
    case constants.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case constants.TOGGLE:
      return state.map(todo => {
        if (todo.id !== action.payload) {
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
export const reducer = combineReducers({ todos, visibility });

// root store
export const store = createStore(reducer);
