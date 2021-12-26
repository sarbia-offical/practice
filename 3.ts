/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2021-12-22 11:09:28
 * @LastEditors: zouwenqin
 * @LastEditTime: 2021-12-22 21:42:58
 */
// 实例接口
interface I1 {
    name: string,
    parm1: number,
    parm2: number,
    sayHi: () => string
}

// 构造函数接口
interface I2{
    new(parm1: number, parm2: number, name: string): I1,
    name: string
}
const factoryFunc = ( ctor: I2, parm1: number, parm2: number, name: string ): I1 => {
    return new ctor(parm1, parm2, name);
}
class C1 implements I1{
    name = '';
    parm1 = 0;
    parm2 = 0;
    constructor(parm1: number, parm2: number, name: string){ 
        this.parm1 = parm1;
        this.parm1 = parm2;
        this.name = name
     }
    sayHi = () => this.name
}
console.log(factoryFunc(C1,1,2,'aaa').sayHi());

// 构造函数接口，定义构造器的参数类型
interface I3<T>{
    new(name: string, age: number): T
}
// 静态接口2
interface I4{
    print: () => string,
    print2: () => number;
}
interface I5{
    sayHi: () => string;
}
const func2 = (ctor: I3<I4>, name: string, age: number) => {
    return new ctor(name, age);
}
class C2 implements I4{
    name: string = '';
    age: number = 0;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    print = () => this.name;
    print2 = () => this.age;
}
const C3:I3<I4> = class implements I4 {
    name: string = '';
    age: number = 0;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    print(){
        return this.name;
    }
    print2(){
        return this.age;
    };
}
const C4:I3<I5> = class implements I5{
    name: string = '';
    age: number = 0;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        return `姓名：${this.name}，年龄：${this.age}`;
    }
}
console.log(func2(C2, '打印', 20).print2());
console.log(new C3('AAA', 50).print2());
console.log(new C4('蜀黍',40).sayHi());