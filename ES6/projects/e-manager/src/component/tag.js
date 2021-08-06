
export default function Tag(el, parent, content = null, attrs = {}) {
  const element = document.createElement(el);
  content ? element.textContent = content : null;
  for (let attr in attrs) {
    element.setAttribute(attr, attr)
  }
  parent.appendChild(element);
  return element;
}