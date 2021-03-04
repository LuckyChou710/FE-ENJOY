/**
我们直接输出 module.exports === exports

会发现两者是相等的 所以exports实际上是module.exports的引用

而require引用的永远是module.exports

也就是说对于exports只能使用exports.xxx = xxx 的形式赋值

因为一旦修改了exports的指向 那么它最终将不会被require引用

而module.exports既可以使用module.exports.xxx = xxx

也可以使用module.exports = xxx
 */

const say = require('./exports');
const { say1 } = require('./module.exports');

console.log(say);

say1();

console.log(module.exports === exports);
