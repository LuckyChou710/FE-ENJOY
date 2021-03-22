const path = require("path");
const Koa = require("koa");
const static = require("koa-static");

const app = new Koa();

app.use(static(path.join(__dirname, "public")));

app.listen(8080, () => {
  console.log("static");
});