/**
 * History Object:
 * It contains the url visited by the user
 * The history object is part of the window object and is accessed through the window.history property.
 *
 * The HTML5 history API is really useful in single page web apps.
 *
 * Security:
 * The HTML5 history API only gives a web page access to the part of the browsing history
 * which lies within the same domain as the web page itself.
 *
 * Property:
 * a. length: Returns the number of URLs in the history list
 *
 * Methods:
 * a. back() - function moves the browsing history back to the previous URL.
 * b. go(index) - function can move the history either back or forward depending on the index you pass as parameter to the go() function
 * c. forward() - function moves the browsing history forward to the next page in the history.
 * d. pushState(stateObject, title, url) - function pushes a new URL onto the history stack
 *    a. url - The url is the URL to push onto the history stack.
 *    b. title - The title parameter is mostly ignored by the browsers.
 *    c. stateObject - The stateObject is an object that will be passed along with the event fired when a new URL is pushed onto the history stack
 *                     This stateObject can contain any data you want. It is just a JavaScript object.
 * e. replaceState(stateObject, title, url) - function works like the pushState() function except
 *                                            it replaces the current element in the history stack with a new URL
 *
 * examples:
 * 1. history.back();
 * 2. history.forward();
 * 3. history.go(-1);
 * 4. history.go(1);
 *
 * 5. var state = {};
      var title = "";
      var url   = "next-page.html";
      history.pushState(state, title, url);
      a. This example pushes a new URL onto the history stack.
      b. This will also change the URL in the browser's address field
      c. But will not cause the browser to try to load that URL

 * 6. var state = {};
      var title = "";
      var url   = "another-page.html";
      history.replaceState(state, title, url);
      a. Replacing the state will also change the URL in the browser's address field
      b. But will not make the browser load that URL.
      c. The page that replaced the URL remains loaded in the browser.

 * 7. History Change Events
      a. The HTML5 history API enables a web page to listen for changes in the browser history
      b. The security restrictions apply here too
      c. so a web page will not be notified of history changes that leads to URLs outside of the domain of the web page
      Ex:
      window.onpopstate = function(event) {
        console.log("history changed to: " + document.location.href);
     }
 */