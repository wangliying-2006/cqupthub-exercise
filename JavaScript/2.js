function calculator(a, num1, num2) {
    switch (a) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return '除数不能为0';
            }
            else
            return num1 / num2;
        default:
            return '无效的操作符';
    }
}
console.log(calculator('+', 1, 3));  
console.log(calculator('-', 5, 2)); 
console.log(calculator('*', 4, 3)); 
console.log(calculator('/', 5, 3));  
console.log(calculator('/', 5, 0));  
console.log(calculator('%', 2, 2));