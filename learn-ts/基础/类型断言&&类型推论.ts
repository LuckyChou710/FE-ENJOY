/**
 *  类型断言
 *  类型断言好比其他语言中的类型转换
 *  方法一: <>
 *  方法二: as
 */

let someValue: any = 'WHO I AM';

let strLen1: number = (<string>someValue).length;
let strLen2: number = (someValue as string).length;

const getType = function (val: string | number) {
  if (typeof val === 'string') {
    return val.length;
  } else {
    return (val as number).toFixed(2);
  }
};

/**
 * 类型推论
 * ts会在没有明确指定类型时推测出一个类型
 */

let number = 'seven';
// number = 7 不能将类型“number”分配给类型“string”

// 等价于
// let number:string = 'seven'
// number = 7
