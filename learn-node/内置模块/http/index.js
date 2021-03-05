const http = require('http');

const app = http.createServer((request, response) => {
  const url = request.url;
  switch (url) {
    case '/home':
      response.write('home');
      response.end();
      break;
    default:
      response.write('404 not found');
      response.end();
  }
});

app.listen(3000, () => {
  console.log('server start');
});
