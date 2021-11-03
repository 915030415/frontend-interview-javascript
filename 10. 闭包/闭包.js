// 外部函数
// function eat(){
//     var food = "鸡翅";
//     return function(){
//         console.log(food);
//     }
// }
// // 执行到第 8 行代码时，形成了一个闭包（封闭的空间）
// // 在该闭包中，引用了 food 这个变量
// // 所以 food 是没有被销毁的
// var i = eat();
// i();

// 作用域是在函数创建的时候就确定下来了
// var food = "rice";
// // function eat(){
// //     console.log(food);
// // }
// (function(){
//     var food = "noodle";
//     function eat(){
//         console.log(food);
//     }
//     eat();
// })()

// 这里就是一个普通的计数器
// var count = 0; // 全局变量
// function counter() {
//     count++;
//     console.log(count);
// }
// for (var i = 0; i < 10; i++) {
//     counter();
// }
// 上面的代码有一个最大的问题，就是全局污染

// ...
// var count = 5;
// console.log(count);

// 接下来我们使用闭包来解决上面的全局污染的问题
// function counter() {
//     var count = 0; // 计数器变量 
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// var func = counter();
// for (var i = 0; i < 10; i++) {
//     func();
// }

// var count = "aaa";


// 下面这段代码也是一个闭包
// 一个函数中要嵌套一个内部函数，并且内部函数要访问外部函数的变量
// 内部函数要被外部引用
// var a = 100;
// setTimeout(function () {
//     console.log(++a);
// }, 1000);

// 有些时候因为闭包所存在的问题
for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}


// for (var i = 1; i <= 3; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000);
//     })(i);
// }
