// // 从右到左 根据表达式值推断变量类型
// // 基础类型推断
// let a = 1

// // 最佳通用类型推断
// let b = [1,'']
// let c = (x = 1) => x + '2'

// // 从左往右 通常发生在事件处理中
// // 上下文类型推断 根据左侧的事件绑定推断出右侧的类型
// window.onkeydown = (event) => {
//     console.log(event)
// }
// /**
//  * 类型断言
//  */
// interface Foo {
//     bar: number
// }
// let foo = {} as Foo
// foo.bar = 1
// /**
//  * 以上使用`as`的方式，不会提示是否缺失定义`bar`属性，
//  * 最好的方式是使用下面代码，在定义时就指明类型
//  * 
//  * Property 'bar' is missing in type '{}' but required in type 'Foo'.
//  */
// let foo02 : Foo = {
//     bar: 1
// }

// // 类型兼容性
// let s: string = 'a'
// // s = null

// // 接口兼容性：成员少 兼容 成员多的（前提：目标类型具备源类型的必要属性 则可以向其兼容）
// interface X {
//     a: number;
//     b: number;
// }
// interface Y {
//     a: number;
//     b: number;
//     c: number;
// }
// let xx: X = { a: 1, b: 2}
// let yy: Y = { a: 1, b: 2, c: 3 }
// // yy = xx // Property 'c' is missing in type 'X' but required in type 'Y'
// xx = yy // Ok

// // 函数兼容性：
// type Handler = (a: number, b: number) => void
// function hof(handler: Handler) {
//     return handler
// }
// // 1.参数个数
// let handler1 = (a: number) => {}
// hof(handler1)
// let handler2 = (a: number, b: number, c: number) => {}
// // hof(handler2) // 源函数参数3个 而目标函数参数2个 所以不能达到兼容

// // 可选参数和剩余参数
// let a1 = (p1: number, p2: number) => {}
// let b1 = (p1?: number, p2?: number) => {}
// let c1 = (...arg: number[]) => {}
// // 固定参数可兼容可选/剩余
// // a1 = b1
// // a1 = c1
// // 可选参数不可兼容固定/剩余 改变"strictFunctionTypes"为 false可进行兼容
// // b1 = a1
// // b1 = c1
// // 剩余参数可兼容可选/固定
// c1 = a1
// c1 = b1

// // 2.参数类型
// // 简单类型
// let handler3 = (a: string) => {}
// // hof(handler3) // 类型不兼容

// // 复杂类型(对象)
// interface Point3D {
//     x: number;
//     y: number;
//     z: number;
// }
// interface Point2D {
//     x: number;
//     y: number;
// }
// let p3d = (point: Point3D) => {};
// let p2d = (point: Point2D) => {};
// p3d = p2d
// // p2d = p3d // 成员多 兼容 成员多少的 改变"strictFunctionTypes"为 false可进行兼容

// /* 3.返回值类型 Ts要求函数定理类型与返回值类型相同或为其子类型
//  * 少的可以兼容多的
// */
// let f1 = () => ({ name: 'jessiex' })
// let f2 = () => ({ name: 'jessiex', age: '2' })
// f1 = f2
// // f2 = f1 // 无法兼容

// // 枚举类型
// enum Fruit { Apple, Banana }
// enum Color { Red, Yellow }
// let fruit: Fruit.Apple = 3
// let no: number = Fruit.Apple // 枚举与number之间是相互兼容的
// // let color: Color.Red = Fruit.Apple // 枚举之间相互不兼容

// // 类兼容性
// // 比较两个类是否兼容时，静态成员和构造函数是不参与比较的
// // 在拥有私有成员时，只有父类和子类之间相互兼容
// class A {
//     constructor(p: number,q:number) {}
//     id: number = 1
//     private name: string = ''
// }
// class B {
//     static s =1
//     constructor(p: number) {}
//     id: number = 2
// }
// let aa = new A(1,2)
// // let bb = new B(1)
// // aa = bb
// // bb = aa
// class C extends A {}
// let cc = new C(1,2)
// cc = aa
// aa = cc

// // 泛型兼容性
// // 在两个泛型参数只有类型不相同时，只有在泛型参数使用时才影响
// interface Empty<T> {
//     value: T
// }
// // let obj3: Empty<number> = {}
// // let obj4: Empty<number> = {}
// // obj3 = obj4

// // 口诀：
// // 结构之间兼容：成员少的兼容成员多的
// // 函数之间兼容：参数多的兼容参数少的

// // 类型保护
// /*
// * TS能够在特定的区块中保证变量属于某种确定的类型。可以再次区块中放心的引用此类型的属性，或者调用此类型的方法
// */
// enum Type { Strong, Weak }
// class Java {
//     helloJava() {
//         console.log('hello,Java')
//     }
//     java: any;
// }
// class JavaScript {
//     helloJavaScript() {
//         console.log('hello,JavaScript')
//     }
//     js: any;
// }
// function isJava(lang: Java|JavaScript): lang is Java {
//     return (lang as Java).helloJava !== undefined
// }
// function getLanguage(type: Type, x: string | number) {
//     let lang = type === Type.Strong ? new Java() : new JavaScript();
//     // instanceof 
//     if (lang instanceof Java) {
//         lang.helloJava()
//     } else {
//         lang.helloJavaScript()
//     }
//     // in 
//     if ('java' in lang) {
//         lang.helloJava()
//     } else {
//         lang.helloJavaScript()
//     }
//     // typeof
//     // if (typeof x === 'string') {
//     //     console.log(x.length)
//     // } else {
//     //     x.toFixed(2)
//     // }
//     // 类型保护函数：某些判断可能不是一条语句能够搞定的，需要更多复杂的逻辑，适合封装到一个函数内
//     if (isJava(lang)) {
//         lang.helloJava()
//     } else {
//         lang.helloJavaScript()
//     }
//     return lang;
// }

