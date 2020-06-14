/**
 * createTextNode: Creates a text string from the specified value.
 */

const node = document.createElement("h1");
const nodeText = document.createTextNode("");
nodeText["nodeValuue"] = "Hello World";
node.appendChild(nodeText)
console.dir(nodeText)

/**
 * Text node attributes:
 * 1. wholeText: "Hello World"
 * 2. assignedDot:null
 * 3. data: "Hello World"
 * 4. length:11
 * 5. previousElementSibling:null
 * 6. nextElementSibling:null
 * 7. noteType:3
 * 8. nodeName:'#text'
 * 9. baseURI:url
 * 10. isConnected:true
 * 11. ownerDocument:document
 * 12. parentNode:h1
 * 13. parentElement:h1
 * 14. childNodes:NodeList[]
 * 15. firstChild:null
 * 16. lastChild:null
 * 17. nodeValue:"Hello World"
 * 18. textContent:"Hello World"
 *
 *
 */