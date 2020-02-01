// let element = LEARNUI.createElement(
//   "div",
//   null,
//   LEARNUI.createElement("a", null, "bar"),
//   LEARNUI.createElement("b")
// );

/** create function createElement */

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children
    }
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}

/**
 * example how createElement works
 * 1. createElement("div")
 *    {
 *          "type":"div",
 *          "props": {
 *              "children":[]
 *          }
 *    }
 *
 * 2. createElement('div',{id:"foo"},a);
 *    {
 *          "type":"div",
 *          "props":{
 *              "id":"foo",
 *              "children":[a]
 *          }
 *    }
 * 3. createElement('div',{id:"foo"},a,b);
 *   {
 *      "type":"div",
 *      "props":{
 *          "id":"foo",
 *          "children":children.map(child=> typeof child!=="object"?child:createTextElement(child))
 *      }
 *   }
 * */

/**
 * But we still want to use JSX here. How do we tell babel to use Didact’s createElement instead of React’s?
 * const element = (
    <div id="foo">
        <a>bar</a>
        <b />
    </div>
    )

  when babel transpiles the JSX it will use the function we define  
 */

/**
 * ReactDOM.render() : now the render function
 * We need to write our own ReactDOM.render() function
 */

function render(element, container) {
  const dom =
    element.type === "TEXT_ELEMENT"
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

const LEARNUI = {
  createElement,
  render
};

const element = (
  <div style="background: salmon">
    <h1>Hello World</h1>
    <h2 style="text-align:right">from Didact</h2>
  </div>
);

const container = document.getElementById("root");
LEARNUI.render(element, container);
