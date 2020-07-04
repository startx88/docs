/** Create Element */
import Somam from "../public/images/Sonam-Kapoor-in-a-blazer.jpg";
import "../index.scss";

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object" ? child : createTextElement(child)
      )
    }
  };
}

/** create text node */
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}

function render(element, container) {
  console.log("el", element);
  const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = key => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach(child => render(child, dom));
  container.appendChild(dom);
}

const Didact = {
  createElement,
  render
};

/** @jsx Didact.createElement */

const App = () => {
  return (
    <div style="background: salmon">
      <h1>Hello World</h1>
      <h2 style="text-align:right">from Didact</h2>
      <img src={Somam} width="100" class="images" />
    </div>
  );
};
console.log("app", App());

const container = document.getElementById("root");
Didact.render(App(), container);
