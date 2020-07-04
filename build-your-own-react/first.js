/** Create and element object */
const container = document.getElementById("root");

let element = {
  type: "h1",
  props: {
    title: "Hello",
    children: "Hello World"
  }
};

/** create node with type */
const node = document.createElement(element.type);
node["title"] = element.props.title;

/** create text node */
const text = document.createTextNode("");
text["nodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);

//ReactDOM.render(element, container);
