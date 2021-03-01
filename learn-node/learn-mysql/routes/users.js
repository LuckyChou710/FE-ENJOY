const express = require("express");
const router = express.Router();

const { add, deconsted, query } = require("../dao/users_dao"); // 数据库操作

/* GET users listing. */
router.get("/", function (req, res, next) {
  // users 相关接口说明文档页面
  res.render("users", {
    title: "usersApi",
    apiList: [
      {
        url: "users/adduser(添加用户)",
        method: "POST",
        params: {
          username: "username",
          password: "password",
        },
        result: {
          success: true,
          data: ``,
        },
      },
      {
        url: "users/deconsteuser(删除用户)",
        method: "GET",
        params: {
          username: "username",
        },
        result: {
          success: true,
          data: ``,
        },
      },
      {
        url: "users/deconsteuser(查询用户)",
        method: "GET",
        params: {
          username: "username",
        },
        result: {
          success: true,
          data: `{
                    username: "username", 
                    password: "password",
                }`,
        },
      },
    ],
  });
});
// 添加用户 post请求
router.post("/adduser", function (req, res, next) {
  const urlParam = req.body;
  console.log(urlParam);
  add(urlParam, function (success) {
    const r = result.createResult(success, null);
    res.json(r);
  });
});
// 删除指定用户 get请求
router.get("/deconsteuser", function (req, res, next) {
  const urlParam = {
    username: req.query.username,
  };
  console.log(urlParam);
  deconsted(urlParam, function (success) {
    const r = result.createResult(success, null);
    res.json(r);
  });
});
// 获取指定用户信息 get请求
router.get("/queryuser", function (req, res, next) {
  const urlParam = {
    username: req.query.username,
  };
  console.log(urlParam);
  query(urlParam, function (success) {
    const r = result.createResult(true, success);
    res.json(r);
  });
});

module.exports = router;
