/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2021-12-22 10:29:12
 * @LastEditors: zouwenqin
 * @LastEditTime: 2021-12-22 11:15:00
 */
// 泛型类，通过一个变量让函数或类在调用时传入类型
class clz2<K>{
    parm: K = null;
    show: (parm1: K, parm2: K) => K
}
const newclz2 = new clz2<number>();
newclz2.parm = 111;
newclz2.show = (x,y) => {
    return x+y;
}
console.log(newclz2.show(newclz2.parm,2));

// 泛型约束，通过一个接口对参数进行约束
interface lengthwise<K, U, Z>{
    length: K,
    chengfa: (U) => Z
}
const clz3 = <K extends lengthwise<string, boolean, number>> (arg: K) => {
    console.log('---');
    console.log(arg.length);
    console.log(arg.chengfa(3));
}

clz3({ length: '2', chengfa: (aa) => { return aa * 3 } });

// 通过keyof规定一个泛型的值必须存在于另一个泛型中
interface TK{
    parmstring: string,
    parmnumber: number
}
const funcx = <K2 extends keyof TK>(arg: TK, arg2: K2) => {
    console.log(arg[arg2]);
    console.log(arg['parmnumber']);
}
funcx( { parmstring: 'funcxxx', parmnumber: 111 }, 'parmstring');

// 泛型中的类类型,类类型使用new()
function create<T>(c: {new(): T}):T {
    console.log(c);
    return new c();
}
class clz4{
    name: string
}
const clz4Instance = create(clz4);
console.log(clz4Instance.name = 'aaa');
// 使用类类型实现一个工厂函数,
console.log('-----类类型的工厂函数------');
class Animal{
    numLengths: number
}
class LionKeeper{
    readonly lionTag: string = 'lionKeeper'
}
class BeeKeeper{
    readonly beeTag: string = 'beeKeeper'
}
class Lion extends Animal{
    keeper: LionKeeper = new LionKeeper();
}
class Bee extends Animal{
    keeper: BeeKeeper = new BeeKeeper();
}
function animalFactory<UK extends Animal>(clz: new() => UK): UK{
    return new clz();
}
console.log(animalFactory(Bee).keeper['beeTag'])