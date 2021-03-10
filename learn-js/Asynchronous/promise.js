const promise1 = Promise.resolve('success');
const promise2 = Promise.reject('oops');

// 只要有一个失败 就返回那个失败的结果
Promise.all([promise1, promise2])
  .then((res) => console.log(res))
  .catch((res) => console.log(res));

// 只要有一个成功 就返回那个成功的结果
Promise.any([promise1, promise2])
  .then((res) => console.log(res))
  .catch((res) => console.log(res));

// 返回每一个结果
Promise.allSettled([promise1, promise2])
  .then((res) => console.log(res))
  .catch((res) => console.log(res));

// 返回第一个执行结束的结果
Promise.race([promise1, promise2])
  .then((res) => console.log(res))
  .catch((res) => console.log(res));
