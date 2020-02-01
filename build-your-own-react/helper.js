/**
 * First we understand: How react works
 */

let element = (
  <h1 className="abc" title="hello">
    Hello World
  </h1>
);

const container = document.getElementById("root");

ReactDOM.render(element, container);

/**
 * Understand how element and component breaks.
 * 1. First it breaks into React.createElement
 * 2. React.createElement breaks into the object
 */

/** Step 1: */
element = React.createElement(
  "h1",
  { className: "abc", title: "hello" },
  "Hello World"
);

/** Step 2: */
element = {
  type: "h1",
  props: {
    className: "abc",
    title: "hello",
    children: "Hello World"
  }
};

/**
 * Then comes on ReactDOM.render()
 * render: is where react changes the dom
 */

/**
 * Create Elment
 * const node = document.createElement(element.type);
 * 1.   align: ""
 * 2.   title: "Hello"
 * 3.   lang: ""
 * 4.   translate: true
 * 5.   dir: ""
 * 6.   hidden: false
 * 7.   accessKey: ""
 * 8.   draggable: false
 * 9.   spellcheck: true
 * 10.  autocapitalize: ""
 * 11.  contentEditable: "inherit"
 * 12.  isContentEditable: false
 * 13.  inputMode: ""
 * 14.  offsetParent: body
 * 15.  offsetTop: 21
 * 16.  offsetLeft: 8
 * 17.  offsetWidth: 1904
 * 18.  offsetHeight: 0
 * 19.  style: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
 * 20.  innerText: ""
 * 21.  outerText: ""
 * 22.  allEvents (oncopy: null
        oncut: null
        onpaste: null
        onabort: null
        onblur: null
        oncancel: null
        oncanplay: null
        oncanplaythrough: null
        onchange: null
        onclick: null
        onclose: null
        oncontextmenu: null
        oncuechange: null
        ondblclick: null
        ondrag: null
        ondragend: null
        ondragenter: null
        ondragleave: null
        ondragover: null
        ondragstart: null
        ondrop: null
        ondurationchange: null
        onemptied: null
        onended: null
        onerror: null
        onfocus: null
        oninput: null
        oninvalid: null
        onkeydown: null
        onkeypress: null
        onkeyup: null
        onload: null
        onloadeddata: null
        onloadedmetadata: null
        onloadstart: null
        onmousedown: null
        onmouseenter: null
        onmouseleave: null
        onmousemove: null
        onmouseout: null
        onmouseover: null
        onmouseup: null
        onmousewheel: null
        onpause: null
        onplay: null
        onplaying: null
        onprogress: null
        onratechange: null
        onreset: null
        onresize: null
        onscroll: null
        onseeked: null
        onseeking: null
        onselect: null
        onstalled: null
        onsubmit: null
        onsuspend: null
        ontimeupdate: null
        ontoggle: null
        onvolumechange: null
        onwaiting: null
        onwheel: null
        onauxclick: null
        ongotpointercapture: null
        onlostpointercapture: null
        onpointerdown: null
        onpointermove: null
        onpointerup: null
        onpointercancel: null
        onpointerover: null
        onpointerout: null
        onpointerenter: null
        onpointerleave: null
        onselectstart: null
        onselectionchange: null
        onanimationend: null
        onanimationiteration: null
        onanimationstart: null
        ontransitionend: null
        )
 *     dataset: DOMStringMap {}
 *     nonce: ""
 *     autofocus: false
 *     tabIndex: -1
 *     enterKeyHint: ""
 *     onformdata: null
 *     onpointerrawupdate: null
 *     namespaceURI: "http://www.w3.org/1999/xhtml"
 *     prefix: null
 *     localName: "h1"
 *     tagName: "H1"
 *     id: ""
 *     className: ""
 *     classList: DOMTokenList [value: ""]
 *     slot: ""
 *     part: DOMTokenList [value: ""]
 *     attributes: NamedNodeMap {0: title, title: title, length: 1}
 *     shadowRoot: null
 *     assignedSlot: null
 *     innerHTML: ""
 *     outerHTML: "<h1 title="Hello"></h1>"
 *     scrollTop: 0
 *     scrollLeft: 0
 *     scrollWidth: 1904
 *     scrollHeight: 0
 *     clientTop: 0
 *     clientLeft: 0
 *     clientWidth: 1904
 *     clientHeight: 0
 *     attributeStyleMap: StylePropertyMap {size: 0}
 *     onbeforecopy: null
 *     onbeforecut: null
 *     onbeforepaste: null
 *     onsearch: null
 *     elementTiming: ""
 *     previousElementSibling: null
 *     nextElementSibling: null
 *     children: HTMLCollection []
 *     firstElementChild: null
 *     lastElementChild: null
 *     childElementCount: 0
 *     onfullscreenchange: null
 *     onfullscreenerror: null
 *     onwebkitfullscreenchange: null
 *     onwebkitfullscreenerror: null
 *     nodeType: 1
 *     nodeName: "H1"
 *     baseURI: "http://127.0.0.1:5500/build-your-own-react/index.html"
 *     isConnected: true
 *     ownerDocument: document
 *     parentNode: div#root
 *     parentElement: div#root
 *     childNodes: NodeList [text]
 *     firstChild: text
 *     lastChild: text
 *     previousSibling: null
 *     nextSibling: null
 *     nodeValue: null
 *     textContent: ""
 */

/**
 * Create Text node and its property:
 * const text = document.createTextNode("");
 * 1.   wholeText: ""
 * 2.   assignedSlot: null
 * 3.   data: ""
 * 4.   length: 0
 * 5.   previousElementSibling: null
 * 6.   nextElementSibling: null
 * 7.   nodeType: 3
 * 8.   nodeName: "#text"
 * 9.   baseURI: "http://127.0.0.1:5500/build-your-own-react/index.html"
 * 10.  isConnected: true
 * 11.  ownerDocument: document
 * 12.  parentNode: h1
 * 13.  parentElement: h1
 * 14.  childNodes: NodeList []
 * 15.  firstChild: null
 * 16.  lastChild: null
 * 17.  previousSibling: null
 * 18.  nextSibling: null
 * 19.  nodeValue: ""
 * 20.  textContent: ""
 * 21.  innerText: "Hello World"
 */
