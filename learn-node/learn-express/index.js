const express = require("express");
const userRouter = require("./router");

const app = express();

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("sever start");
});
