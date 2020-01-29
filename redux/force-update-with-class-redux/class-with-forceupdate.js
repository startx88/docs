import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";
import { store, constants } from "../Store";

// Input Component
const TodoForm = ({ clicked }) => {
  const input = React.useRef("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        store.dispatch({
          type: constants.ADD_TODO,
          payload: {
            id: Date.now().toString(),
            text: input.current.value,
            completed: false
          }
        });
        input.current.value = "";
      }}
      className="form-group input-group mb-3"
    >
      <input
        type="text"
        ref={input}
        placeholder="Enter text"
        className="form-control mr-2"
      />
      <button className="btn btn-info" type="submit">
        ADD
      </button>
    </form>
  );
};

const TodoItem = ({ text, completed, deleted, toggled }) => {
  return (
    <li
      className="d-flex justify-content-between"
      style={{
        padding: "6px",
        border: "1px solid #eee",
        borderRadius: "5px",
        marginBottom: "5px"
      }}
    >
      <span
        onClick={toggled}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          flex: "0 0 92%",
          wordBreak: "break-word",
          fontFamily: "Arial"
        }}
      >
        {completed ? (
          <del style={{ marginBottom: 0, color: "red" }}>{text}</del>
        ) : (
          text
        )}
      </span>
      <button style={{}} onClick={deleted}>
        &times;
      </button>
    </li>
  );
};

// Todo List
const TodoList = ({ todos, deleted, toggled }) => {
  return (
    <ul className="list-group">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          deleted={() => deleted(todo.id)}
          toggled={() => toggled(todo.id)}
        />
      ))}
    </ul>
  );
};

/**
 * Footer component and sub component
 * @param {} param0
 */
const Link = ({ children, clicked, active }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a onClick={clicked} className="btn btn-sm btn-info ml-2 mr-2" href="#">
      {children}
    </a>
  );
};

class FilterLink extends React.Component {
  componentDidMount() {
    this.subs = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.subs();
  }
  render() {
    const { children, filter } = this.props;
    const { visibility } = store.getState();
    return (
      <Link
        clicked={() => {
          store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            payload: filter
          });
        }}
        active={filter === visibility}
      >
        {children}
      </Link>
    );
  }
}

const Footer = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <FilterLink filter="SHOW_ALL">ALL</FilterLink>
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </div>
  );
};

// Filter todo
const todoFilterData = (state, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return state;
    case "SHOW_ACTIVE":
      return state.filter(t => t.completed);
    case "SHOW_COMPLETED":
      return state.filter(t => !t.completed);
    default:
      return state;
  }
};

class VisibleTodos extends React.Component {
  componentDidMount() {
    this.subs = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.subs();
  }

  render() {
    const state = store.getState();
    return (
      <TodoList
        todos={todoFilterData(state.todos, state.visibility)}
        toggled={id => {
          store.dispatch({
            type: constants.TOGGLE,
            payload: id
          });
        }}
        deleted={id => {
          store.dispatch({
            type: constants.DELETE_TODO,
            payload: id
          });
        }}
      />
    );
  }
}

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <h4 className="text-center">
            <Logo width="40" /> Todo App
          </h4>
          <hr />
          <TodoForm />
          <VisibleTodos />
          <Footer />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
