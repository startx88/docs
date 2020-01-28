const { createStore } = Redux;

/****
 * Initial State
 *********/
const initState = {
  todos: [],
  setVisiblityFilter: false
};

const reducer = (state = initState, action) => {
  const { type, payloads } = action;
  switch (type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, payloads]
      };
    case "DELETE":
      console.log("p", payloads);
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payloads)
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

/**
 * Add Todo function
 */
function addTotos(event) {
  event.preventDefault();
  store.dispatch({
    type: "ADD",
    payloads: { id: Date.now().toString(), value: event.target.todo.value }
  });
  event.target.todo.value = "";
}

const Counter = () => <h1>Hello World</h1>;
const render = () => {
  ReactDOM.render(<Counter />, document.getElementById("root"));
};

render();
//store.subscribe(render);
