const express = require("express");
var bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/login", (req, res, next) => {
  console.log(req.body);
});

app.listen(8000, () => {
  console.log("start");
});
