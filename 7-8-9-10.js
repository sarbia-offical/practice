let obj = {
    arr: ['A', 'B', 'C'],
    num: 10,
    sayWait: function () {
        return () => {
            return this;
        };
    }
};
console.log(obj.sayWait()());
let func = (num, param1 = 'aaa') => num + param1;
console.log(func(10));
// 以字面量方式规定函数泛型类型的两种写法
let ff = (arg1) => arg1;
let ff2 = (arg1) => arg1.sort((ele1, ele2) => ele2 - ele1);
console.log(ff([1, 2, 3, 4, 5]));
console.log(ff2([1, 2, 3, 4, 5]));
