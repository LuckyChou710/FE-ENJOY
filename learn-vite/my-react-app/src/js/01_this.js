const bar = function () {
  console.log(this);
};

const foo = () => {
  console.log(this);
};

const obj = {
  // 对象字面量写法
  bar,
  foo,
};

obj.bar(); // obj
obj.foo(); // windows
