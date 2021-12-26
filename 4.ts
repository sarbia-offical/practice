/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2021-12-22 16:42:15
 * @LastEditors: zouwenqin
 * @LastEditTime: 2021-12-22 17:05:53
 */
// 接口继承
interface I1{
    color: string
    size: number
}
interface I2 extends I1{
    print: () => string
}
let obj = {} as I2;
obj.color = 'red';
obj.size = 10;
obj.print = () => `颜色${obj.color}，大小${obj.size}`
console.log(obj.print());