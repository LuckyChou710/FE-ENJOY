const Koa = require("koa");
const axios = require("axios");
const app = new Koa();

const middlewareA = async (ctx, next) => {
  ctx.msg = "";
  ctx.msg += "A";
  await next();
  ctx.body = ctx.msg;
};

const middlewareB = async (ctx, next) => {
  ctx.msg += "B";
  await next();
};

const middlewareC = async (ctx) => {
  const res = await axios.get("https://koa.bootcss.com/");
  ctx.msg += res.data;
};

app.use(middlewareA);
app.use(middlewareB);
app.use(middlewareC);

app.listen(8080, () => {
  console.log("Koa");
});
