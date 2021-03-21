const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.end("hello");
});

router.post("/delete", (req, res, next) => {
  res.end("deleted");
});

module.exports = router;
