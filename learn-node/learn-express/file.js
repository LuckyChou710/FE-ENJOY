const express = require("express");
const multer = require("multer");
const path = require("path");

// const upload = multer({ dest: "uploads" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      // file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      file.originalname
    );
  },
});

const upload = multer({ storage: storage });

const app = express();

// 单文件上传
app.post("/single", upload.single("avatar"), (req, res, next) => {
  console.log(req.file);
});

// 多文件上传
app.post(
  "/fields",
  upload.fields([
    { name: "avatar", macCount: 1 },
    { name: "bg", maxCount: 2 },
  ]),
  (req, res, next) => {
    console.log(req.files);
  }
);

// 多文件上传
app.post("/array", upload.array("bg", 3), (req, res, next) => {
  console.log(req.files);
});

// 原生处理文件上传
app.post("/upload", (req, res, next) => {
  let data = "";
  req.on("data", (buffer) => {
    data += buffer;
  });
  req.on("end", () => {
    console.log(data.toString());
  });
});

app.listen(8080, () => {
  console.log("start~~~");
});
