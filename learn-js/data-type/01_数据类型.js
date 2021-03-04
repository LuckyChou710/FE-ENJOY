/**
 * 基本数据类型
 * undefined
 * null
 * number
 * string
 * boolean
 * bigint
 * symbol
 *
 * typeof 只有null 会拿到object 其他都是对应的基本数据类型
 * 对于用构造函数创建的number/boolean/string instance of 可以判断出它们的类型
 */

console.log('---------------start----------------');

const _undefined = undefined;
const _null = null;
const _number = 1;
const _string = 'chou';
const _boolean = true;
const _bigint = 1n;
const _symbol = Symbol();

console.log(typeof _undefined);
console.log(typeof _null); // 返回object
console.log(typeof _number);
console.log(typeof _string);
console.log(typeof _boolean);
console.log(typeof _bigint);
console.log(typeof _symbol);

console.log('---------------end----------------');

console.log('---------------start----------------');

/**
 * 引用数据类型
 * Object
 *
 * RegExp
 * Date
 * Function
 * Array
 * Math
 *
 * typeof 只有Function能拿到对应的数据 其他都是Object
 */

const _regexp = new RegExp('/w/g');
const _date = new Date();
const _function = function () {};
const _array = [];

console.log(typeof _regexp);
console.log(typeof _date);
console.log(typeof _function); // 返回function
console.log(typeof _array);

console.log(_regexp instanceof RegExp);
console.log(_date instanceof Date);
console.log(_function instanceof Function);
console.log(_array instanceof Array);

console.log('---------------end----------------');

/**
 * 基础类型存储在栈内存，被引用或拷贝时，会创建一个完全相等的变量；
 * 引用类型存储在堆内存，存储的是地址，多个引用指向同一个地址，这里会涉及一个“共享”的概念。
 */

console.log('---------------start----------------');
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(null).slice(8, -1));

function getDataType(type) {
  return Object.prototype.toString.call(type).slice(8, -1);
}
