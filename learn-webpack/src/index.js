// require('./css/autoprefixer.css');
import _ from 'lodash';
// import printMe from './print';
// import BgImage from './img/bg.jpg';
// import Data from './data.xml';
// console.log(BgImage);
// console.log(Data);

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());