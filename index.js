/* 
1. Promise 就是一个类 在执行这个类的时候 需要传递一个执行器进去 执行器会立即执行
2. Promise 中有三种状态 分别为 等待 pending  成功 fulfilled  失败 rejected
    pending -> fulfilled
    pending -> rejected
    一旦状态确定就不可更改
3. resolve 和 reject 函数是用来更改状态的
    resolve: fulfilled
    reject: rejected
4. then 方法内部做的事情就是判断状态，如果状态是成功，调用成功的回调函数，如果状态是失败，调用失败的回调函数
then 方法是被定义在原型对象中的 
5. then 成功回调有一个参数，表示成功之后的值  then 失败回调有一个参数，表示失败后的原因
6. 同一个 promise 对象下面的 then 方法是可以被调用多次的
7. then 方法是可以被链式调用的，后面 then 方法的回调函数拿到的值 是上一个 then 方法的回调函数的返回值
*/

const MyPromise = require('./myPromise')

let promise = new MyPromise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('setTimeout 成功');
    //     // reject('setTimeout 失败');
    // }, 2000);
    // throw new Error('executor error');
    resolve('成功');
    // reject('失败');
})

function other () {
    return new MyPromise((resolve, reject) => {
        resolve('other 成功')
    })
}

// let p1 = promise.then(value => {
//     console.log(value);
//     // throw new Error('Error 1234')
//     return 'aaa'
// }, reason => {
//     console.log(reason.message);
//     throw new Error('Error 1234')
// }).then(value => {
//     console.log(value);
// }, err => {
//     console.log(err.message); 
// })

function p_fn1() {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('1 成功')
        }, 2000)
    })
}
function p_fn2() {
    return new MyPromise((resolve, reject) => {
        // resolve('2 成功')
        reject('2 失败')
    })
}

// 支持静态方法 .all()
// MyPromise.all(['a', 'b', p_fn1(), p_fn2(), 'c']).then(value => {
//     console.log(value);
// }, reason => {
//     console.log(reason); 
// })

// 支持静态方法 .resolve()
// MyPromise.resolve(10).then(value => console.log(value));
// MyPromise.resolve(p_fn1()).then(value => console.log(value));

// 实例对象支持 .finally 方法
// p_fn2().finally(() => {
//     console.log('finally');
//     return p_fn1(); 
// }).then(value => {
//     console.log(value);
// }, reason => {
//     console.log(reason);
// });

// 实例对象支持 .catch 方法
p_fn2()
    .then(value => console.log(value))
    .catch(reason => console.log(reason))

// 参数可选
// promise.then().then().then(value => console.log(value), reason => console.log(reason)) 


// p1.then(value => {
//     console.log(value);
// }, reason => {
//     console.log(reason);
// })

// promise.then(value => {
//     console.log(value);
// }, reason => {
//     console.log(reason);
// })
