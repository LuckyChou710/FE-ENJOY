// 打印表格 第二个参数为数组 可以决定显示哪些数据 不传该参数则默认全部显示
console.table(
  [
    { a: 1, b: 'Y' },
    { a: 'Z', b: 2 },
  ],
  ['a', 'b']
);

// 断言 断言成功时 不打印任何语句 失败时有打印语句
console.assert(true, 'DO NOTHING');
console.assert(false, 'DO SOMETHING');

// 清空控制台
console.clear();

// 计数 默认值: 'default'
console.count('1');
console.count('1');
console.count('1');

// 重置计数
console.countReset('1');
console.count('1');

// 打印出对象的所有属性和属性值.
console.dir({ name: 'chou', age: 18 });


const code = 5;
console.error('error #%d', code);
// 打印到 stderr: error #5
console.error('error', code);
// 打印到 stderr: error 5

console.time('do');
console.timeLog('do');
console.timeEnd('do');

