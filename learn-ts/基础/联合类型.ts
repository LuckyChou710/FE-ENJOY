/**
 * 联合类型
 * 用 | 隔开每一个类型
 * 当访问属性或调用方法时 ts不确定该变量最后什么类型 所有只能是公共的类型或方法
 * 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
 */

function showNumber(myNumber: string | number): (string | number) {
  return myNumber.toString() // 只能使用string和number共有的类型
}

let myNumber: string | number
myNumber = 7
myNumber = 'seven'
