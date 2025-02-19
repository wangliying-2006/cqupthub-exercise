function repeatStr(str, ...numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    
    return str.repeat(sum);
}

console.log(repeatStr("abc", 2, 3)); 