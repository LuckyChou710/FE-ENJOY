const Koa = require("koa");

const userRouter = require("./router");

const app = new Koa();

app.use(userRouter.routes());

app.listen(8080, () => {
  console.log("Koa");
});
