const foo = () => {
  console.log(this);
};

const bar = function () {
  console.log(this);
};

const obj = {
  foo,
  bar
};

obj.foo();
obj.bar();
