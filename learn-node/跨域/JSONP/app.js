const http = require('http');
const url = require('url');
const querystring = require('querystring');

const app = http.createServer((request, response) => {
  const _url = url.parse(request.url);
  const cb = querystring.parse(_url.query).cb;
  switch (_url.pathname) {
    case '/home':
      response.end(`${cb}('这是后端返回的数据')`);
      break;
    default:
      response.write('404 not found');
      response.end();
  }
});

app.listen(3000, () => {
  console.log('server start');
});
