/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2021-12-23 11:39:02
 * @LastEditors: zouwenqin
 * @LastEditTime: 2021-12-24 17:20:47
 */
// 类，抽象类
class C1{
    public _fullName: string = '';
    public _age: number = 0;
    public static xxx: number = 0;
    constructor(name: string, age: number){
        this._fullName = name;
        this._age = age;
    }
    // 寄存器get和set
    get fullName(): string {
        console.log('获取_fullName');
        return this._fullName;
    }
    set fullName(fullName: string){
        this._fullName = fullName;
    }

    get age(): number {
        return this._age;
    }
    set age(age: number){
        this._age = age;
    }
}
const c1 = new C1('xxx',10);
console.log(c1.fullName);

let c1Maker: typeof C1 = C1;
c1Maker.xxx = 999;
let maker = new c1Maker('tony', 10);
console.log(c1Maker.xxx);

abstract class C2 {
    public fullName: string = '';
    constructor(fullName: string){
        this.fullName = fullName;
    }
    abstract wait(): string;
}

class CC2 extends C2{
    constructor(name: string){
        super(name);
    }
    wait(): string {
        throw new Error("Method not implemented.");
    }
    
}