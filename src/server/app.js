const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// app.use(express.static("dist"));

// app.use(express.static(path.join(__dirname, "dist")));

app.use(express.static(path.join(__dirname, "../client", "dist")));

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../client", "dist", "index.html"));
});

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
