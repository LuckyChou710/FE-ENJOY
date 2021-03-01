const express = require("express");
const createError = require("http-errors"); // 处理错误
const path = require("path");
const bodyParser = require('body-parser');

// const indexRouter = require('./routes/index');
const usersRouter = require("./routes/users");


const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// 声明路由
// app.use('/',indexRouter);
app.use("/users", usersRouter);

// 404
app.use((req, res, next) => {
  next(createError(404));
});

app.listen(8888);

module.exports = app;
