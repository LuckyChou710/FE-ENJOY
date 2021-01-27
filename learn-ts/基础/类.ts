/**
 * class 类
 * 继承 extends
 * 公共，私有与受保护的修饰符
 * readonly修饰符
 * 存取器 getter setter
 * 静态属性 static
 * 抽象类 abstract
 * 把类当做接口使用
 */

// 继承
class Pet {
  name: string
  constructor(name: string) {
    this.name = name
  }
  move() {
    console.log('moving')
  }
}

class Dog extends Pet {
  constructor(name: string) {
    super(name)
  }
}

new Dog("哈士奇").move()

// 公共，私有与受保护的修饰符
class Pet {
  // 公有属性 所有地方都可访问 默认在不声明的情况下 都是public
  public name: string
  // 私有属性 只有在声明类的内部才可以访问
  private color: string
  // 受保护的属性 只有在声明类及其子类才可以访问
  protected weight: number
  constructor(name: string, color: string, weight: number) {
    this.name = name
    this.color = color
    this.weight = weight
  }
  bark() {
    // 声明类内部 所有属性都可以访问
    console.log('I am ' + this.name + ' , ' + this.color + this.weight)
  }
}
// 在外部 只能访问 public 修饰的属性 bark 没有修饰符 默认为public
new Pet('哈士奇', 'blue', 10).bark()
new Pet('哈士奇', 'blue', 10).name = '蓝色哈士奇'

class Dog extends Pet {
  constructor(name: string, color: string, weight: number) {
    super(name, color, weight)
  }
  bark() {
    // 子类中 color无法访问 因为color是父类的私有属性 但是可以访问到父类受保护的属性weight
    console.log('I am ' + this.name + ' , ' + this.weight)
  }
}

// readonly修饰符
class Pet {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

// 无法分配到 "name" ，因为它是只读属性
// new Pet("哈士奇").name = "二哈"

// 但是可以读取
console.log(new Pet('哈士奇').name)

// 存取器 getter setter
class Pet {
  name: string
  constructor(name: string) {
    this.name = name
  }
  get fullName() {
    return this.name
  }

  set fullName(name: string) {
    this.name = name
  }
}

// 静态属性
class Pet {
  static move() {
    console.log('moving')
  }
}

Pet.move()

// 抽象类 abstract
abstract class Pet {
  constructor(name: string) {}

  // abstract声明的方法必须在实现类中实现它
  abstract bark(): void
}

class Dog extends Pet {
  name: string
  constructor(name: string) {
    super(name)
    this.name = name
  }
  bark(): void {
    console.log(this.name)
  }
}

// 把类当做接口使用
class Point {
  x: number
  y: number
}

interface Point3d extends Point {
  z: number
}

let point3d: Point3d = { x: 1, y: 2, z: 3 }
