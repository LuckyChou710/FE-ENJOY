// 初始化一个被观察者对象
class Publish {
  constructor(name) {
    this.name = name
    this.subscribers = [] // 数组中存放所有的订阅者，本例中是所代表的观察者的行为
  }
  // 分发，发布消息
  deliver(news) {
    var publish = this // 各报社实例

    // 通知所有的订阅者
    this.subscribers.forEach((item) => {
      item(news, publish) // 每个订阅者都收到了 news, 并且还知道是哪家报社发布的
    })
    return this // 方便链式调用
  }
}

// 订阅
Function.prototype.subscribe = function (publish) {
  var sub = this // 当前订阅者这个人
  // 1. publish.subscribers 中，名字可能重复
  // 2. publish.subscribers 数组里面已有的人，不能再次订阅
  var alreadyExists = publish.subscribers.some(function (item) {
    return item === sub
  })
  // 如果出版社名单中没有这个人，则加入进去
  if (!alreadyExists) publish.subscribers.push(sub)

  return this // 方便链式调用
}

// 取消订阅
Function.prototype.unsubscribe = function (publish) {
  var sub = this
  // filter (过滤函数:循环便利数组的每一个元素，执行一个函数如果不匹配，则删除该元素)
  publish.subscribers = publish.subscribers.filter(function (item) {
    return item !== sub
  })
  return this // 方便链式调用
}

// 实例化发布者对象(报社)
var pub1 = new Publish('报社一')
var pub2 = new Publish('报社二')
var pub3 = new Publish('报社三')

// 定义观察者，当报社有了新的消息后，观察者会收到通知
// 本例中以观察者的行为代替观察者对象，模拟 addEventListener
var sub1 = function (news, pub) {
  console.log(arguments)
  document.getElementById('sub1').innerHTML += pub.name + news + '\n'
}

var sub2 = function (news, pub) {
  console.log(arguments)
  document.getElementById('sub2').innerHTML += pub.name + news + '\n'
}

// 执行订阅方法，这一步是观察者主动
sub1.subscribe(pub1).subscribe(pub2)
sub2.subscribe(pub1).subscribe(pub2).subscribe(pub3)

var p1 = document.getElementById('pub1') // dom
var p2 = document.getElementById('pub2') // dom
var p3 = document.getElementById('pub3') // dom

// 事件绑定, 触发 报社 的消息分发
p1.onclick = function () {
  pub1.deliver(document.getElementById('text1').value, pub1)
}

p2.onclick = function () {
  pub2.deliver(document.getElementById('text2').value, pub2)
}

p3.onclick = function () {
  pub3.deliver(document.getElementById('text3').value, pub3)
}
