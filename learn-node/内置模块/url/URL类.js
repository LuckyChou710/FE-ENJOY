/**
 * new URL(input[, base])
 * url.hash
 * url.host
 * url.hostname
 * url.href
 * url.origin
 * url.password
 * url.pathname
 * url.port
 * url.protocol
 * 特殊协议
 * url.search
 * url.searchParams
 * url.username
 * url.toString()
 * url.toJSON()
 */

const url = require('url');
const myUrl = 'https://luckychou.gitee.io/2020/12/05/FE/React/ReactNotes10?author=chou';
const _url = new URL(myUrl);

console.log(_url);
console.log(_url.searchParams.get('author'));
