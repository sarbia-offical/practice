/*
 * @Description:
 * @version:
 * @Author: zouwenqin
 * @Date: 2021-12-15 16:57:57
 * @LastEditors: zouwenqin
 * @LastEditTime: 2021-12-21 00:33:01
 */
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName.concat(this.lastName);
    }
}
const generator = (user) => {
    console.log(user);
};
let user = new User('aa', 'bb');
generator(user);
// 元组类型
let x = [
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
];
console.log(x);
// 枚举
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = parseInt(x[1])] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
console.log(Color.RED);
// any
let obj = 0;
obj = null;
console.log(obj);
// 类型断言
let str = '159753';
let lg = str.length;
console.log(lg);
// 解构
let arr = [11, 22, 33];
let objx = {
    firstName: 'a',
    lastName: '1'
};
function f([first, second, third], { firstName, lastName, fullName = 'b' }) {
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(firstName);
    console.log(lastName);
    console.log(fullName);
}
f(arr, objx);
// 只读属性
let arrx = [1, 2, 3, 4, 5];
console.log(arrx);
const res = { name: 'xxx', code: 1234, 'aaa': 2222 };
console.log(res);
const func = (arg1, arg2, arg3) => {
    return new Promise((resolve, reject) => {
        resolve(arg1.concat(arg2));
    });
};
func('a', 'c', 1).then(res => {
    console.log(res);
});
const arrxx = ['a1', 'b1', 'c1'];
console.log(arrxx[0]);
let clzz = {
    1: 0,
    clz: user,
    clf: 'xxx'
};
console.log(clzz);
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
