/**
 * XMLHttpRequest (XHR) object:
 * it interact with server, you can retrieve data from URL without having to do a full page.
 * this enable a webpage to update a part of web page without blocking the user what is doing.
 *
 * it haviliy used in AJAX.
 *
 * XMLHttpRequest ====> XMLHttpRequestEventTarget ====> EventTarget
 *
 * Note: it can retreive any type of data not just XML
 *
 * It has sevaral method and properties
 *
 * Properties:
 * 1.   onreadystatechange: an "EventHandler" it called whenever the readyState attribute change.
 *      a. it is a function to be executed every time when the status change.
 *      b. When readyState property is 4 and the status property is 200, the response is ready:
 *      c. The responseText property returns the server response as a text string.
 *
 * 2.   readyState: read only, Holds the status of the XMLHttpRequest.
        0: request not initialized
        1: server connection established
        2: request received
        3: processing request
        4: request finished and response is ready

 * 3.   timeout: 0, Is an unsigned long representing the number of milliseconds a request can take before automatically being terminated.
 * 4.   withCredentials: Is a Boolean that indicates whether or not cross-site Access-Control
 *      requests should be made using credentials such as cookies or authorization headers.
 * 5.   upload: Is an XMLHttpRequestUpload, representing the upload process
 * 6.   responseURL: Returns the serialized URL of the response or the empty string if the URL is null.
 * 7.   status: Returns an unsigned short with the status of the response of the request.
 * 8.   statusText: Returns a DOMString containing the response string returned by the HTTP server.
 * 9.   responseType: Is an enumerated value that defines the response type.
 * 10.  response: Returns an ArrayBuffer, Blob, Document, JavaScript object, or a DOMString, depending on the value of XMLHttpRequest.responseType,
 * 11.  responseText: Returns a DOMString that contains the response to the request as text, or null
 * 12.  responseXML: Returns a Document containing the response to the request, or null
 *
 * Methods:
 * 13.  abort(): abort the request if it has already send
 * 14.  getAllResponseHeader(): return all response headers or null if no response
 * 15.  getResponseHeader(): Returns the string containing the text of the specified header,
 *                           or null if either the response has not yet been received or the header doesn't exist in the response.
 * 16.  open(): initialize the request
 * 17.  overrideMimeType(): Overrides the MIME type returned by the server.
 * 18.  send(): Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.
 * 19.  setRequestHeader(): Sets the value of an HTTP request header. You must call setRequestHeader()after open(), but before send().
 *
 * Events:
 * 20.  onload():
 * 21.  onerror():
 * 22.  onabort():
 * 23.  onloadstart():
 * 24.  onpregress():
 * 25.  ontimeout():
 *
 *
 *
 *
 * Example:
 * const URL ='https://jsonplaceholder.typicode.com/users';
 * const xml = new XMLHttpRequest();
 * xml.onreadystatechange=function(){
 *      if(xml.readyState===4 && xml.status===200){
 *          // return responseText and responseXML depend on xmlHTTPRequest.
 *          console.log(xml.responseText)
 *      }
 * }
 * xml.open("GET",URL);
 * xml.send();
 *
 *
 * or
 * 
 */