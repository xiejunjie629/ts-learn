
// // 在运行环境下编译成对象, 可用属性名索引， 也可用属性值索引
// // 实现原理：反向映射
// // 数字枚举
// enum Role {
//     Reporter, // Reporter = 1, 也可赋值，后续值递增
//     Developer,
//     Maintainer,
//     Owner,
//     Guest
// }
// console.log(Role.Reporter) // 0

// // 字符串枚举 
// // 只有成员的名称被当作哦的key
// enum Message {
//     Success = '成功！',
//     Fail = '失败！'
// }

// // 异构枚举
// enum Answer {
//     N,
//     Y = 'Yes'
// }

// // 枚举成员 是只读的状态
// // Role.Reporter = 2
// enum Char {
//     // const member 在为未初始化/
//     a,
//     b = Char.a,
//     c = 1 + 3,
//     // compute member
//     d = Math.random(),
//     e = '123'.length,
// }
// // 常量枚举
// const enum Month {
//     Jan,
//     Feb,
//     Mar
// }
// let month = [Month.Jan, Month.Feb, Month.Mar]

// // 枚举类型
// enum E { a, b }
// enum F { a = 0, b = 1 }
// enum G { a = 'apple', b = 'banana'}

// let e: E = 3
// let f: F = 3

// let e1: E.a
// let e2: E.b
// let e3: E.a


// let g1: G
// let g2: G.a