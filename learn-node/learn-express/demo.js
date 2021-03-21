const express = require("express");
const axios = require("axios");

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
  const data = await axios.get("http://axios-js.com/zh-cn/docs/");
  console.log(data);
  req.message += data;
  next();
};

app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);

app.listen(8000, () => {
  console.log(8000);
});
