const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (param) => {
  const arr = Array.from({ length: param }, (item, index) => index + 1);
  const index = arr.filter((value, index) => value === 3);
  console.log(index);
});
