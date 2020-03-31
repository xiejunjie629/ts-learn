import { type } from "os";

// 高级类型
// 交叉类型 -> 并集∪ 适合做对象的混入
interface DogInterFace {
    run(): void
}
interface CatInterFace {
    jump(): void
}

let pet: DogInterFace & CatInterFace = { 
    run() {},
    jump() {}
}

// 联合类型 声明的类型并不确定 可以是其中的一个 ->交集∩ 增强代码的灵活性
let a: number | string = 'a';
let b: 'a' | 'b' | 'c' // 字面量联合类型(只可赋值其中的一种)
let c: 1 | 2 | 3

// 对象的联合类型
class Dog implements DogInterFace {
    run() {}
    eat() {}
}
class Cat implements CatInterFace {
    jump() {}
    eat() {}
}
enum Master { Boy, Girl }
function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog() : new Cat();
    pet.eat() // 联合类型在未确定类型下 可访问所有类型的共有成员
    return pet
}

// 可区分的联合类型
interface Square {
    kind: "square",
    size: number
}
interface Rect {
    kind: 'rect',
    width: number,
    height: number,
}
interface Circle {
    kind: 'circle',
    r: number
}
type Shape = Square | Rect | Circle
function area(s: Shape) {
    switch (s.kind) {
        case "square":
            return s.size * s.size
        case "rect":
            return s.width * s.height
        case "circle":
            return s.r * 2 * 3.14
        default:
            return ((e: never)=>{throw new Error(e)})(s) // 可通过never的方式对联合类型查漏补缺
    }
}
console.log(area({kind: "circle", r: 2}))

// 索引类型 可以实现对对象属性的查询和访问
// 查询操作符 keyof T
interface Obj {
    a: number,
    b: string
}
let key: keyof Obj // 此时类型为 "a" | "b" 的字面量类型
// 索引访问操作符 T[K]
let value: Obj['a'] // number
// T extends U
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
  }
  
  interface Person {
      name: string;
      age: number;
  }
  let person: Person = {
      name: 'Jarid',
      age: 35
  };
  let strings: string[] = pluck(person, ['name']); // ok, string[]

  // 映射类型 从旧类型中创建新类型的一种方式
//   同态 不会创建新的属性
type ReadonlyObj = Readonly<Obj>
type PartialObj = Partial<Obj>
type PickObj = Pick<Obj, 'a'>
// 
type RecordObj = Record<'x' | 'y' | 'z',Obj>


// 条件类型 是一种由条件表达式所决定的类型
// T extends U ? X : Y
type TypeName<T> = 
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  T extends undefined ? "undefined" :
  T extends Function ? "function" :
  "object";

type T1 = TypeName<string>
type T2 = TypeName<string[]>
type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T
type T4 = Diff<'a'|'b','a'>
type noNull<T> = Diff<T,null|undefined>
