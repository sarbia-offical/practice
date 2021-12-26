/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2021-12-23 11:39:02
 * @LastEditors: zouwenqin
 * @LastEditTime: 2021-12-24 17:20:47
 */
// 类，抽象类
class C1 {
    constructor(name, age) {
        this._fullName = '';
        this._age = 0;
        this._fullName = name;
        this._age = age;
    }
    // 寄存器get和set
    get fullName() {
        console.log('获取_fullName');
        return this._fullName;
    }
    set fullName(fullName) {
        this._fullName = fullName;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
}
C1.xxx = 0;
const c1 = new C1('xxx', 10);
console.log(c1.fullName);
let c1Maker = C1;
c1Maker.xxx = 999;
let maker = new c1Maker('tony', 10);
console.log(c1Maker.xxx);
class C2 {
    constructor(fullName) {
        this.fullName = '';
        this.fullName = fullName;
    }
}
class CC2 extends C2 {
    constructor(name) {
        super(name);
    }
    wait() {
        throw new Error("Method not implemented.");
    }
}
