/**
 * 1. DOMParser interface provide the ability to parser the XML and HTML source code from string
 * to DOM Document.
 *
 * Syntax:
 * const parser = new DOMParser();
 *
 * It has a method named parseFromString(string, mimeType) method
 *
 * String:
 * The DOMString to be parsed. It must contain either HTML, xml, xhtml+xml, or svg document.
 *
 * mimeType	                doc.constructor
    text/html	            Document
    text/xml	            XMLDocument
    application/xml	        XMLDocument
    application/xhtml+xml	XMLDocument
    image/svg+xml	        XMLDocument
 *
 * const doc = parser.parseFromString("<div><h1>Hello World</h1><div>", "text/html");
 * Note: Either "Document" or "XMLDocument" depending on the mimeType argument.
 *
 *
 * console.log(doc);
 * result:
 * #document
 *  <html>
 *      <body>
 *          <h1>Hello World</h1>
 *      </body>
 *  </html>
 *
 */

/**
 * Note: You can perform the opposite operation—converting a DOM tree into XML or HTML source—using
 *
 * 2. XMLSerializer interface:
 * It provides the serializeToString() method to construct an XML string
 * representating DOM tree.
 *
 * syntax:
 * const str = new XMLSerializeer().serialzeToString(doc);
 * console.log(str)
 *
 * result:
 * <html xmlns="http://www.w3.org/1999/xhtml"><head></head><body><div><h1>Hello</h1></div></body></html>
 *
 *  */