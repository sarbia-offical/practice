/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2021-12-22 21:45:53
 * @LastEditors: zouwenqin
 * @LastEditTime: 2021-12-23 10:29:49
 */
// 混合类型
interface Counter{
    // 定义该函数的参数类型和返回值类型
    (param1: string): string
    func( param1: number ):  string,
    interval: number,
}
function getCounter(): Counter{
    let c = (function(param1: string) {
        return param1;
    }) as Counter;
    c.func = (param1: number) => param1+'';
    c.interval = 10;
    return c;
}
console.log(getCounter()('10'));

interface funcType<T>{
    (param1: number, param2: string): Promise<T>
}
const funcInstance = (function func(param1: number, param: string){
    return new Promise((resolve, reject) => {
        resolve('aaaa');
    })
}) as funcType<string>
funcInstance(10,'aaa').then(res => {
    console.log(res);
})