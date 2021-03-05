// 当前模块的父文件夹名
console.log(__dirname);
// 当前模块的绝对路径
console.log(__filename);

const path = require('path');
console.log('文件所在目录名：', path.dirname(__filename));
console.log('path的最后一部分：', path.basename(__filename));
console.log('系统路径定界符：', path.delimiter);
console.log('文件扩展名：', path.extname(__filename));
console.log('将路径解析成绝对路径', path.resolve(__dirname, __filename));
