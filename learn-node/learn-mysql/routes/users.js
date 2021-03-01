const express = require("express");
const router = express.Router();

const { add, deleted, query } = require("../dao/users_dao"); // 数据库操作

// 添加用户 post请求
router.post("/adduser", function (req, res, next) {
  const urlParam = req.body;
  add(urlParam, (success) => {
    res.json(success);
  });
});
// 删除指定用户 get请求
router.get("/deluser", function (req, res, next) {
  const urlParam = {
    username: req.query.username,
  };
  deleted(urlParam, (success) => {
    res.json(success);
  });
});

// 获取指定用户信息 get请求
router.get("/queryuser", function (req, res, next) {
  const urlParam = {};
  query(urlParam, (success) => {
    res.json(success);
  });
});

module.exports = router;
