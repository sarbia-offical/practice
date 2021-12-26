/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2021-12-15 16:57:57
 * @LastEditors: zouwenqin
 * @LastEditTime: 2021-12-22 10:29:29
 */
class User{
    firstName: string
    lastName: string
    fullName?: string
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName.concat(this.lastName);
    }
}
// 接口类型
interface IPerson  {
    firstName: string
    lastName: string
    fullName?: string
}
const generator = (user: IPerson) => {
    console.log(user);
}
let user = new User('aa','bb');
generator(user);
// 元组类型
let x: [number, string, Array<IPerson>] = [
    1,
    'aaa',
    [
        {
            firstName: 'aa',
            lastName: 'bb'
        },
        {
            firstName: 'cc',
            lastName: 'dd'
        }
    ]
]
console.log(x);
// 枚举
enum Color {
    RED = 0,
    GREEN = parseInt(x[1]),
    BLUE = 2,
}
console.log(Color.RED);
// any
let obj: number = 0;
obj = null;
console.log(obj);
// 类型断言
let str: any = '159753';
let lg = (<string>str).length;
console.log(lg);
// 解构
let arr: [number, number, number] = [11,22,33];
let objx: User = {
    firstName: 'a',
    lastName: '1'
};
function f([first,second,third]: [number,number,number], {firstName,lastName,fullName = 'b'}: User){
    console.log(first);
    console.log(second);
    console.log(third);

    console.log(firstName);
    console.log(lastName);
    console.log(fullName);
}
f(arr, objx);

// 只读属性
let arrx: ReadonlyArray<number> = [1,2,3,4,5];
console.log(arrx);
// 只读属性&额外属性
interface IType {
    readonly name: string,
    readonly code: number,
    [propName: string] : any    
}
const res: IType = { name: 'xxx', code: 1234, 'aaa': 2222 }
console.log(res);
// 函数属性
interface IFuncType{
    (arg1: string, arg2: string, arg3: number): Promise<string>
}
const func: IFuncType = (arg1: string, arg2: string, arg3?: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        resolve(arg1.concat(arg2).concat(arg3+''));
    })
}
func('a','c',1).then(res => {
    console.log(res);
})
// 可索引类型
interface arrType<T>{
    [index: number]: T,
}
const arrxx: arrType<string> = ['a1', 'b1', 'c1'];
console.log(arrxx[0]);

interface classInterface<T,K,F> {
    [index: number]: T,
    clz: K,
    clf: F
}
let clzz: classInterface<number, User, string> = {
    1: 0,
    clz: user,
    clf: 'xxx'
}
console.log(clzz);