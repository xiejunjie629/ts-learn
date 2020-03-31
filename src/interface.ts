// /*
//     可选属性 通过 ? 来设置
//     只读属性 通过 readonly 来设置
//     类型断言 用 as 或者<>的形式 ，后者在react中使用会出问题
// */
// interface List {
//     id: number;
//     name: string;
// }

// interface Result {
//     data: List[]
// }

// function render(result: Result) {
//     result.data.forEach((item) => {
//         console.log(item.id, item.name);
//     })
// }

// let result = {
//     data: [
//         { id: 1, name: 'A' },
//         { id: 2, name: 'B' }
//     ]
// }

// render(result)

// // 类型断言 用 as 或者<>的形式 ，后者在react中使用会出问题
// render(<Result>{
//     data: [
//         { id: 1, name: 'A' },
//         { id: 2, name: 'B' }
//     ]
// } as Result)


// interface StringArray {
//     [index: number]: string //用任意数字所以StringArray都会返回一个string 相当于声明了一个字符串类型的数组
//     y: number
// }
// // let chars: StringArray = {'A', 'B', 1}

// // 变量形式定义函数
// let adds: (x: number, y:number) => number
// // 等价于一下接口定义函数
// interface Add {
//     (x: number, y: number): number
// }
// // 还可使用 类型别名 的方式定义
// type Add1 = (x:number, y: number) => number
// let add1: Add1 = (a, b) => a + b

// // 混合类型
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }
