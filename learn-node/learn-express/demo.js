const express = require("express");

const app = express();

const middlewareA = (req, res, next) => {
  req.message = "";
  req.message += "A";
  next();
  res.end(req.message);
};

const middlewareB = (req, res, next) => {
  req.message += "B";
  next();
};

const middlewareC = async (req, res, next) => {
  setTimeout(() => {
    req.message += "C";
  }, 0);
  next();
};

app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);

app.listen(8000, () => {
  console.log(8000);
});
