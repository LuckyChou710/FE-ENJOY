/**
 * 函数
 * 给函数定义类型
 * 可选参数
 * 默认参数
 * 剩余参数
 * 重载
 */

//  给函数定义类型
function add(x: number, y: number): number {
  return x + y
}

// 可选参数
function showName(firstName: string, lastName?: string) {
  if (lastName) return firstName + ' ' + lastName
  else return firstName
}

// 默认参数
function showName(firstName: string, lastName = 'chou') {
  if (lastName) return firstName + ' ' + lastName
  else return firstName
}

// 剩余参数
function showName(firstName: string, ...lastName: string[]) {
  if (lastName) return firstName + ' ' + lastName
  else return firstName
}

// 重载
function showType(x: any): any {
  if (typeof x === 'number') {
    return 'number'
  } else if (typeof x === 'string') {
    return 'string'
  } else {
    return "I don't know"
  }
}
