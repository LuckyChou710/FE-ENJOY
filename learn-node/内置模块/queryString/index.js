/**
 * uerystring 模块提供用于解析和格式化 URL 查询字符串的实用工具
 * 
 * querystring.decode() = querystring.parse(str[, sep[, eq[, options]]])
 * querystring.encode() = querystring.stringify(obj[, sep[, eq[, options]]])
 * querystring.unescape(str)
 */


const querystring = require('querystring');

const url = 'foo=bar&abc=xyz&abc=123';
console.log(querystring.decode(url));
// { foo: 'bar', abc: [ 'xyz', '123' ] }


querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// 返回 'foo=bar&baz=qux&baz=quux&corge='
querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
// 返回 'foo:bar;baz:qux'