const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.end("hello");
});

app.get("/json", (req, res, next) => {
  res.json({ name: "chou" });
});

app.get("/status", (req, res, next) => {
  res.sendStatus(500);
});

app.get("/download", (erq, res, next) => {
  res.download("./main.js");
});

app.listen(3000, () => {
  console.log("server start");
});
