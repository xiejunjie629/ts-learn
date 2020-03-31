// // 关于数据类型
// // 1.原始类型
// let bool: boolean = true;
// let num: number = 1;
// let str: string = 'i am string';

// // 2.引用类型
// let arr1: number[] = [1, 2, 3];
// let arr2: Array<number | string> = [1, 2, 3, 'q']; // 联合类型数组

// // 元组: 定义一个已知元素数量和类型的数组，各元素的类型不必相同
// let tuple: [number, string] = [1, 's']
// // tuple.push('a') 允许使用数组的方法添加 但是关于越界的元素无法访问
// // 原则其元组上不可以改变，允许 push 应该是一个TypeScript 的一个缺陷

// // 函数：需声明参数的类型和返回值类型(通常可省略，由TS推算)
// let add = (a:number, b:number) =>  a + b 
// let computed: (x: number, y: number) => number // 声明返回值
// computed = (a, b) => a + b // 参数名称可不同

// // 对象
// let obj1: object = { x: 1, y: 2 }
// // obj1.x = 3 // 报错，因为上述声明只定义了obj1为对象,未声明对象下属性的类型
// let obj2: {x: number, y:number} = { x: 1, y:2 } // 正确定义方式

// // symbol: 含义是具有唯一的值
// // let s1: symbol = Symbol();
// // let s2 = Symbol()

// // null 和 undefined (官方文档中，这两个类型为其它数据类型的子类型)
// let nu: null = null;
// let un: undefined = undefined; // undefined不能赋值其它数据类型
// // add = null 可设置tsconfig.json中"strictNullChecks": false
// // 若想要在严格模式下 可采用联合类型 即可通过类型检查
// let mult: number | null | undefined = null;

// // void 表示没有任何类型 当一个函数没有返回值时，通常会见到其返回值类型是 void
// let noReturn = () => {}

// // any 可以赋值为任意类型 
// // 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 
// // 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：
// let x

// // never 永远不会有返回值的类型 例：
// // 1.函数抛出异常 就不会有返回值
// let error = () => {
//     throw new Error('error')
// } 
// // 2.死循环，永远不会有返回
// let endless = () => {
//     while(true) {}
// }
