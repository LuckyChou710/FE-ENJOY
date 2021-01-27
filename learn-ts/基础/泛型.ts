/**
 * 泛型
 * 泛型方法
 * 泛型类
 * 泛型约束
 */

// 泛型方法
// function identity(arg: string): string {
//   return arg
// }

function identity<T>(arg: T): T {
  return arg
}

// 泛型类
class GenericNumber<T> {
  zeroValue!: T
  add!: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}

// 泛型约束
interface Lengthwise {
  length: number
}

// 报错 我们并不确定用户最终会传入什么类型 所以我们无法保证arg上有length这个属性
// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length)
//   return arg
// }

// 使用泛型约束
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

loggingIdentity({length: 10, value: 3});