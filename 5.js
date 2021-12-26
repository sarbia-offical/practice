function getCounter() {
    let c = (function (param1) {
        return param1;
    });
    c.func = (param1) => param1 + '';
    c.interval = 10;
    return c;
}
console.log(getCounter()('10'));
const funcInstance = (function func(param1, param) {
    return new Promise((resolve, reject) => {
        resolve('aaaa');
    });
});
funcInstance(10, 'aaa').then(res => {
    console.log(res);
});
