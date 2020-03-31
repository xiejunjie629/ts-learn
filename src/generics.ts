// // // 泛型函数
// // function log<T>(value: T): T {
// //     return value
// // }
// // log<string[]>(['a','b']) // 根据约束的类型带入函数
// // log(['a',2]) // 可通过TS自身的类型推断

// // 用类型别名来实现泛型函数
// // type Log = <T>(value: T) => T
// // let mylog: Log = log // 具体实现可指定到log函数

// // 泛型接口
// interface Log1 {
//     <T>(value: T): T // 与类型别名方式等价
// }
// interface Log2<T> { // 当泛型变量约束整个接口的话，实现时必须指定一个类型
//     (value: T): T 
// }
// // let mylog1: Log2<number> = log
// // mylog1(1)

// // 泛型类
// class Log3<T> {
//     run(value: T) {
//         console.log(value)
//         return value
//     }
// }
// let log1 = new Log3<number>()
// log1.run(1)
// let log2 = new Log3() // 当不指定参数类型，则可以传入任意类型
// log2.run('a')

// // 泛型约束
// interface Length {
//     length: number
// }
// function log<T extends Length>(value: T): T {
//     console.log(value, value.length)
//     return value
// }
// log([])
// log('11')
// log({length: 1})