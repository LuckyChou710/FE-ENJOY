const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.join(__dirname, "public")));

app.listen(8080, () => {
  console.log("静态资源服务器部署成功");
});
