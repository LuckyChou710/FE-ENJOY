class Peron {
  constructor(name) {
    this._name = name;
  }
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

const person = new Peron('chou');
person._name = 'lucky';
console.log(per)

class Stu extends Peron {
  constructor() {
    super();
  }
  static say() {
    super.say();
  }
}

// Peron.say();

// Stu.say();
