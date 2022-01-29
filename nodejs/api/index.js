const http = require("http");

// create server
const server = http.createServer((req, res, next) => {

  if (req.method === "POST" && req.url === "/contact") {
    res.setHeader("Content-Type", "application/json");
    req.on("data", (chunk) => {
      const d = chunk.toString("utf-8").split("&");
      console.log('chunk', d);
    })
    return res.end('Post');
  }

  if (req.method === "GET" && req.url === "/contact") {
    res.setHeader("Content-Type", "text/html");
    return res.end(`
        <html>
          <head>
            <title>Contact</title>
          </head>
          <body>
            <h1>Contact</h1>
            <form action="/contact" method="post">
              <input type="text" name="name" placeholder="Name">
              <input type="text" name="email" placeholder="Email">
              <input type="text" name="message" placeholder="Message">
              <input type="submit" value="Send">
            </form>
          </body>
        </html>
      `);
  }


  res.setHeader("Content-Type", "text/text");
  res.end("Node server");
})


// listen
server.listen(3000);
