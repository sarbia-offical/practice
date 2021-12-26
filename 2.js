/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2021-12-22 10:29:12
 * @LastEditors: zouwenqin
 * @LastEditTime: 2021-12-22 11:15:00
 */
// 泛型类，通过一个变量让函数或类在调用时传入类型
class clz2 {
    constructor() {
        this.parm = null;
    }
}
const newclz2 = new clz2();
newclz2.parm = 111;
newclz2.show = (x, y) => {
    return x + y;
};
console.log(newclz2.show(newclz2.parm, 2));
const clz3 = (arg) => {
    console.log('---');
    console.log(arg.length);
    console.log(arg.chengfa(3));
};
clz3({ length: '2', chengfa: (aa) => { return aa * 3; } });
const funcx = (arg, arg2) => {
    console.log(arg[arg2]);
    console.log(arg['parmnumber']);
};
funcx({ parmstring: 'funcxxx', parmnumber: 111 }, 'parmstring');
// 泛型中的类类型,类类型使用new()
function create(c) {
    console.log(c);
    return new c();
}
class clz4 {
}
const clz4Instance = create(clz4);
console.log(clz4Instance.name = 'aaa');
// 使用类类型实现一个工厂函数,
console.log('-----类类型的工厂函数------');
class Animal {
}
class LionKeeper {
    constructor() {
        this.lionTag = 'lionKeeper';
    }
}
class BeeKeeper {
    constructor() {
        this.beeTag = 'beeKeeper';
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new LionKeeper();
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new BeeKeeper();
    }
}
function animalFactory(clz) {
    return new clz();
}
console.log(animalFactory(Bee).keeper['beeTag']);
