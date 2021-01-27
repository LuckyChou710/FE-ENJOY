/**
 * 装饰器
 * 类装饰器
 * 属性装饰器
 * 方法装饰器
 * 方法参数装饰器
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 类装饰器
function log(params) {
    console.log(params);
    params.prototype.run = function () {
        console.log('running......');
    };
}
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat = __decorate([
        log
    ], Cat);
    return Cat;
}());
// 装饰器工厂 返回的函数才是真正的装饰器
// function logClz(params: string) {
//   console.log('params:', params) //params: hello
//   return function (target: any) {
//     console.log('target:', target) //target: class HttpClient
//     target.prototype.url = params //扩展一个url属性
//   }
// }
// @logClz('hello')
// class HttpClient {
//   constructor() {}
// }
// let http: any = new HttpClient()
// console.log(http.url)
// 修改类的定义
// function fn<T extends { new (...args: any[]): {} }>(constructor: T): T {
//   class Ps extends constructor {
//     age: number = 20 //扩展一个类型为number的属性age
//   }
//   return Ps
// }
// @fn
// class Person{
// }
// let p:any = new Person(); //装饰之后的Person已经变成了Ps
// console.log(p.age)  //20
// 属性装饰器
function get(params) {
    console.log(params); // 装饰器传入的参数：http://baidu.com
    return function (target, methodName, desc) {
        console.log(target); // { constructor:f, getData:f } 
        console.log(methodName); // getData
        console.log(desc); // {value: ƒ, writable: true, enumerable: false, configurable: true} value就是方法体
        /* 修改被装饰的方法 */
        //1. 保存原方法体
        var oldMethod = desc.value;
        //2. 重新定义方法体
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            //3. 把传入的数组元素都转为字符串
            var newArgs = args.map(function (item) {
                return String(item);
            });
            //4. 执行原来的方法体
            oldMethod.apply(this, newArgs);
            // 等效于 oldMethod.call(this, ...newArgs);
        };
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('getData: ', args);
    };
    __decorate([
        get('http://baidu.com')
    ], HttpClient.prototype, "getData");
    return HttpClient;
}());
var http = new HttpClient();
http.getData(1, 2, true); // getData: ["1", "2", "true"]
