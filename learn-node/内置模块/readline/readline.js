const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '请输入> ',
});

rl.prompt();

rl.on('line', (param) => {
  //   console.log(param);
  rl.write('删除这个！');
  //   rl.pause();
  // rl.close() 方法会关闭 readline.Interface 实例，并放弃对 input 和 output 流的控制。 当调用时，将触发 'close' 事件。
  //调用 rl.close() 不会立即停止 readline.Interface 实例触发的其他事件（包括 'line'）。
  //   rl.close();
  rl.setPrompt('> ');
});
