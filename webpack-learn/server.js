const express = require("express");
const path = require("path");

// app
const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(express.static("build"));
  app.get("/*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
  });
}

const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
  console.log("Server is running...", PORT);
});
