/******
 * What is websocket: websocket is a browser feature that provide bi-dirctorial communication for client and server.
 * there are 3 interface
 * 1. WebSocket
 * 2. CloseEvent
 * 3. MessageEvent
 ************/

const webSocket = new WebSocket("ws://localhost:5500");

webSocket.addEventListener("open", socket => {
    console.log('connection', socket)
    webSocket.send('Hello Server!');

})

// Listen for messages
webSocket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});