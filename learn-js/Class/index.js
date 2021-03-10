// class Stu {
//   constructor(name) {
//     this.name = name;
//   }
//   say() {
//     console.log('hello i am', this.name);
//   }
// }

// const stu1 = new Stu('chou');

// stu1.say();

// console.log(typeof Stu);

function Stu(name) {
  this.name = name;
}

Stu.prototype.say = function () {
  console.log('hello i am', this.name);
};

new Stu('chou').say();
