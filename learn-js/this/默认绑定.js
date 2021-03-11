/**
 * var声明的变量 和 function 会默认变成全局对象window下的变量和方法
 * 在严格模式下不会
 */

// "use strict";


var a = 10;
function foo() {
  console.log(this.a);
}
foo();

console.log(window.foo); // foo {}
console.log(window.a); // 10

// 函数内部的this指向window
// this.a => window.a => 1
// 因为函数内部有自己的作用域 var a = 2 不会修改window下的a
var a = 1;
function bar() {
  var a = 2;
  console.log(this); // window{}
  console.log(this.a); // 1
}

bar();
