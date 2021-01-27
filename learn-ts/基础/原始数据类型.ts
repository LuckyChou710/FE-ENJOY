/**
 * boolean
 * 用构造函数Boolean创造的对象不是布尔值
 * 直接使用Boolean可以返回一个布尔值
 */
let isShow: boolean = false
let isOk: boolean = Boolean(true)
// let isTrue: boolean = new Boolean(false)

/**
 * number
 */
let age: number = 18

/**
 * string
 */
let username: string = 'chou'

/**
 * array
 * 在类型后面直接跟上[]
 * 使用数组泛型
 */
let list1: number[] = [1, 2, 3, 4, 5]
let list2: Array<number> = [1, 2, 3, 4, 5]

/**
 * tuple
 * 元组类型允许我们表示一个已知元素数量和类型的数组，各元素的类型不必相同
 */
let person: [string, number] = ['chou', 18]

/**
 * null && undefined
 * 默认情况下 undefined 和 null 是所有类型的子类 可以给其他类型赋值
 * 在tsconfig.json中配置strict后 它们就只能赋值给void和它们自己
 */
let u: undefined = undefined
let n: null = null
// let myString: string = undefined
// let myNumber: number = undefined
let myVoid: void = undefined


/**
 * any
 * 可以声明那些在编程阶段还不确定的变量类型
 * 可以调用任意方法
 * 可以访问任意属性
 * 变量在声明的时候 未指定其类型 那么它会被识别为任意值类型
 */
let notSure: any = 4
notSure = 'abc'

let password

// 等价于
// let password:any

/**
 * void
 * 当一个函数没有返回值时 通常会为其声明返回值为void
 * 只能为void类型的变量 赋予undefined和null
 */
function showName(): void {
  alert('chou')
}

/**
 * never
 * 一般是那些抛出异常的函数
 * never是所有类型的子类
 * never类型没有子类 即使是any类型 也不能给never赋值
 */
function myError(message: string): never {
  throw new Error(message)
}

/**
 * object
 * 除number，string，boolean，symbol，null或undefined之外的类型
 * 在tsconfig.json中 未开始strict时 可以将null赋予object类型的变量
 */
let myObject: object

myObject = { name: 'chou' }
// myObject = null

