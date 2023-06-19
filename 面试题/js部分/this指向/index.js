/*
 * @Description: 
 * @version: 
 * @Author: zouwenqin
 * @Date: 2023-06-18 16:23:52
 * @LastEditors: zouwenqin
 * @LastEditTime: 2023-06-18 16:31:52
 */
var num = 123;
const test = function(){
    this.num = 5;
}

test.prototype.say = function(){
    console.log('this',this);
    console.log(this.num);
}
test(); // 当前this指向window对象，需要在外部定义变量
test.prototype.say(); // 当前this指向test的原型，如果需要能够用this.num访问到内容，则需要在原型上添加num，test.prototype.num = 5;
const t = new test(); // 当前this指向test的实例，需要在构造函数内部通过this进行绑定
t.say();