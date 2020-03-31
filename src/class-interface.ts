// // 类与接口的关系
// interface Human {
//     name: string;
//     eat(): void;
// }

// class Asian implements Human {
//     constructor(name: string) {
//         this.name = name
//     }
//     name: string
//     eat() {}
//     sleep() {}
// }
// // 类实现接口时，必须实现接口中声明的所有属性
// // 接口只能约束类的共有成员
// // 接口不能约束类的构造函数

// // 接口的继承 可以抽离出可重用的接口 多个接口合并成一个接口 一个接口可以继承多个接口

// interface Man extends Human {
//     run(): void;
// }
// interface Child {
//     cry(): void;
// }
// // 可将多个接口封装成一个接口，同样必须事项所有属性
// interface Boy extends Man,Child {}
// let boy: Boy = {
//     name: '',
//     eat() {},
//     run() {},
//     cry() {}
// }

// // 接口继承类 只有类的成员结构 而未具体实现
// class Auto{
//     state = 1;
//     private state2 = 0;
//     protected state3 = 3;
// }
// interface AutoInterface extends Auto{}
// class Bus extends Auto implements AutoInterface{ 
//     showMsg(){
//         // console.log(this.state2); // 不能访问来自接口的私有属性
//         console.log(this.state3); // 可以访问来自接口的被保护属性
//     }
// }
// let bus = new Bus();
// bus.showMsg(); 
// console.log(bus); // 输出可以看到state2属性和state3属性

