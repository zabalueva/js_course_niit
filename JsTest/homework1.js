function reversedWord(word) {  
    if (typeof word === 'string') {
        return word.split('').reverse().join('');
    }
    return 'error';
};

const reversedWords = reversedWord('небо');
console.log(reversedWords);


function hi(name, age) {
    return `Меня зовут ${name}, мне ${age} лет`;
};
const hiRes = hi("Elena", "17");
console.log(hiRes);


function sum(a, b) {
    return a + b;
};
console.log(sum(2, 4));

function minus(a, b) {
    return a - b;
};
console.log(minus(2, 4));

function multi(a, b) {
    return a * b;
};
console.log(multi(2, 4));


function division(a, b) {
    return a / b;
};
console.log(division(2, 4));


function factorial1(n){
    let result = 1;
    while(n){
        result *= n--;
    }
    return result;
};
console.log(factorial1(2));

function factorial2(n){
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};
console.log(factorial2(10));

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
};
console.log( factorial(3) ); 



