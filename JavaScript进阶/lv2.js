const original = { a: 1, b: { c: 2 } } 
const copy = Object.assign({}, original);
copy.b.c=3;
console.log(original.b.c);
//浅拷贝只复制对象的第一层属性，对于嵌套的对象，它只是复制了嵌套对象的引用，而不是创建一个新的嵌套对象
// 进行浅拷贝时，copy 对象的结构与 original 相同，但 copy.b 和 original.b 实际上指向的是同一个对象


// 使用递归实现深拷贝
function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj; 
    }
    const result = Array.isArray(obj) ? [] : {}; 
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepCopy(obj[key]); 
        }
    }
    return result;
}

const deepCopyObj = deepCopy(original);

deepCopyObj.b.c = 4;

console.log("original.b.c 的值：", original.b.c); 
console.log("deepCopyObj.b.c 的值：", deepCopyObj.b.c);
//在深拷贝过程中，original 中的嵌套对象 { c: 2 } 会被重新创建为一个新的对象 { c: 2 }，而不是简单地复制引用.由于 deepCopyObj 是一个全新的对象，其嵌套结构与 original 完全独立。因此，修改 deepCopyObj.b.c 的值为 4 时，original.b.c 的值不会受到影响，仍然保持为 2。