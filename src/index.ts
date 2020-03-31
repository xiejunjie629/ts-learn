let hello: string = 'hello world'

document.querySelectorAll('.app')[0].innerHTML = hello;
// 全局库对外保留全局变量，模块库有export 语句，UMD库有典型的UMD封装
// globalLib({x:2})
// globalLib.doSomething()

// import moduleLib from './libs/module-lib'
// moduleLib({y:3})
// moduleLib.doSomething()

// import umdLib from './libs/umd-lib'

// // 给外部类库增加自定义方法 模块化插件
// import m from 'moment'
// declare module 'moment' {
//     export function myFuntion(): void
// }
// m.myFuntion =() => {}
// // 给全局插件添加方法

// declare global {
//     namespace globalLib {
//         function doAnything(): void
//     }
// }

// globalLib.doAnything() // 污染全局环境 不建议

// 声明文件的依赖


