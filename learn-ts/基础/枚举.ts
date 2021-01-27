/**
 * enum
 * 默认情况下 从0开始为元素编号
 * 手动编号后 后面的元素从手动编号的那个值开始
 */
enum myColor {
  Red,
  Green = 2,
  Blue,
}

let color: myColor = myColor.Blue
console.log(color) // 3 因为我们手动给myColor编号了 Blue为3

// 减少魔法数字
enum STATUS {
  READY = 0,
  OK = 1,
  FAILED = -1,
}

let type

if (type === STATUS.READY) {
  // TODO
}

if (type === STATUS.OK) {
  // TODO
}

if (type === STATUS.FAILED) {
  // TODO
}
