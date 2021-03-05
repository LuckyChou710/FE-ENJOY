console.log('main starting')
const a = require('./a.js')
debugger
const b = require('./b.js')
console.log('in main, a.done = %j, b.done = %j', a.done, b.done)

/**
 * 我们知道nodeJs的对每个js文件进行了一层包装称为module，module中有一个属性exports，
 * 当调用require('a.js')的时候其实返回的是module.exports对象，
 * module.exports初始化为一个{}空的object，
 * 所以在上面的例子中，执行到b.js中const a = require('./a.js');时不会load新的a module, 
 * 而是将已经load但是还未完成的a module的exports属性返回给b module，
 * 所以b.js拿到的是a module的exports对象，即：{done:false}, 
 * 虽然在a.js中exports.done被修改成了true，但是由于此时a.js未load完成，
 * 所以在b.js输出的a module的属性done为false，而在main.js中输出的a module的属性done为true. 
 * Nodejs通过上面这种返回未完成exports对象来解决循环引用的问题。
 * 
 */