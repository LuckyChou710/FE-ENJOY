const express = require('express');
const createError = require('http-errors'); // 处理错误


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


const app = express();

// 声明路由
app.use('/',indexRouter);
app.use('/users',usersRouter);


// 404
app.use((req,res,next)=>{
    next(createError(404));
})

module.exports = app;

