/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2021-12-24 17:23:02
 * @LastEditors: zouwenqin
 * @LastEditTime: 2021-12-27 16:28:46
 */
// this+箭头函数的使用
interface I1{
    arr: Array<string>,
    num: number,
    sayWait: () => () => string
}
let obj: I1 = {
    arr: ['A','B','C'],
    num: 10,
    sayWait: function() {
        return () => {
            return this;
        }
    }
}

console.log(obj.sayWait()());

// 函数类型+可选参数+泛型
interface IFunc <T>{
    (num: number, param1?: string): T
}

// 以字面量方式规定函数泛型类型的两种写法
let ff: <T>(agr1: T[]) => T[] = <T>(arg1: T[]) => arg1;
let ff2: { <T>(arg1: T[]): T[] } = <T>(arg1: T[]) => arg1.sort((ele1: any, ele2 : any) => ele2 - ele1);
console.log(ff([1,2,3,4,5]));
console.log(ff2([1,2,3,4,5]));
// 以接口方式规定类型
let func: IFunc<string> = (num: number, param1: string = 'aaa') => num + param1
console.log(func(10));
