console.log("1");//同步代码
setTimeout(() => {//宏任务
 console.log("2");
 Promise.resolve().then(() => {//微任务
 console.log("3");
 }).then(() => {//微任务
 console.log("4");
 });
}, 0);
async function test() {//异步函数
 console.log("5");//同步代码
 await Promise.resolve().then(() => {//微任务
 console.log("6");
 });
 console.log("7");//同步代码
}
test();
setTimeout(() => {//宏任务
 console.log("8");
}, 0);
console.log("9");//同步代码
//输出：1 5 9 6 7 2 3 4 8