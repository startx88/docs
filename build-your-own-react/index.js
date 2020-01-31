const express = require("express");
const path = require("path");

// app
const app = express();

if (process.env.NODE_ENV !== "development") {
  app.use(express.static(path.join(__dirname)));
  app.use("*", (res, req, next) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });
}

const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
  console.log("Server is running...", PORT);
});
