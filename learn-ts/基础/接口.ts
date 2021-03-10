/**
 * 接口
 * 对行为的抽象
 * 定义的变量必须和接口中的变量一致 不能多也不能少
 * 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
 * 可选属性 ?
 * 只读属性 readonly
 * 继承接口 extends
 * 可索引的类型
 * 混合类型 （TODO）
 * 类实现接口 implements
 *
 */
interface Person {
  name: string;
  age: number;
  // 可选属性
  height?: string;
  readonly gender: string;
}

let chou: Person = {
  name: 'chou',
  age: 18,
  gender: 'male',
};

// 继承接口
interface Student extends Person {
  sno: string;
}

let stu: Student = {
  name: 'chou',
  age: 18,
  gender: 'male',
  sno: '001',
};

// 类实现接口
interface Counter {
  // x: number
  // y: number
  add(x: number, y: number): number;
}

class myCounter implements Counter {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add(x: number, y: number): number {
    return x + y;
  }
}

// 可索引的类型
interface StringArray {
  [index: number]: string;
}

