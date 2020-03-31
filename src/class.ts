// class Dog {
//     constructor(name: string) { // 既不能被实例化 也不能被继承
//         this.name = name;
//     }
//     protected age: number
//     name: string
//     run() {}
// }
// console.log(Dog.prototype) // { run: f, constructor: f }
// let dog = new Dog('erha')
// console.log(dog)

// // 继承
// class Husky extends Dog {
//     constructor(name: string, color: string) {
//         super(name) // 派生类的构造函数必须包含 "super" 调用
//         this.color = color; // 访问派生类的构造函数中的 "this" 前，必须调用 "super"
//     }
//     color: string
// }
// /* 修饰符
//     public 默认 对所有类是可见的
//     private 私有成员 只能在类的本身调用，而不能被类的实例/子类调用
//                 用作构造函数的话 既不能被实例化 也不能被继承
//     protected 受保护成员 只能在类或子类中调用 不能在类的实例中调用 
//                 用作构造函数的话 即不能被实例化，只能被继承
//     readonly 只读 一定要被初始化 不可修改
//     static 静态成员 只能通过类名来调用 可被继承
// */

// // 抽象类：抽离出一些类的共性，有利于代码的复用和拓展 可实现多态
// abstract class Animal {
//     eat() {
//         console.log('eat')
//     }
//     abstract sleep(): void // 在抽象类中可以定义抽象函数，在子类中做不同的操作
// }
// // let animal = new Animal() 无法创建抽象类的实例
// class Cat extends Animal {
//     constructor(name: string) {
//         super()
//         this.name = name;
//     }
//     name: string
//     sleep() {
//         console.log('cat sleep')
//     }
// }
// let cat = new Cat('miao')
// class Bird extends Animal {
//     sleep() {
//         console.log('Bird sleep')
//     }
// }
// let bird = new Bird();
// // 多态
// let animal: Animal[] = [cat, bird]
// animal.forEach((i) => {
//     i.sleep()
// })

// // this 实现原型链
// class WorkFlow {
//     step1() {
//         return this;
//     }
//     step2() {
//         return this;
//     }
// }
// new WorkFlow().step1().step2()

