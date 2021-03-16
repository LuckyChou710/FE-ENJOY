// Array.from

// const arr = Array.from(new Array(10), (val, index) => index + 1);
const arr = Array.from({ length: 10 }, (val, index) => index + 1);

arr.reduce((prev, curr) => 
  prev.push(1)
, []);


