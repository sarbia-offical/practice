const factoryFunc = (ctor, parm1, parm2, name) => {
    return new ctor(parm1, parm2, name);
};
class C1 {
    constructor(parm1, parm2, name) {
        this.name = '';
        this.parm1 = 0;
        this.parm2 = 0;
        this.sayHi = () => this.name;
        this.parm1 = parm1;
        this.parm1 = parm2;
        this.name = name;
    }
}
console.log(factoryFunc(C1, 1, 2, 'aaa').sayHi());
const func2 = (ctor, name, age) => {
    return new ctor(name, age);
};
class C2 {
    constructor(name, age) {
        this.name = '';
        this.age = 0;
        this.print = () => this.name;
        this.print2 = () => this.age;
        this.name = name;
        this.age = age;
    }
}
const C3 = class {
    constructor(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    print() {
        return this.name;
    }
    print2() {
        return this.age;
    }
    ;
};
const C4 = class {
    constructor(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    sayHi() {
        return `姓名：${this.name}，年龄：${this.age}`;
    }
};
console.log(func2(C2, '打印', 20).print2());
console.log(new C3('AAA', 50).print2());
console.log(new C4('蜀黍', 40).sayHi());
