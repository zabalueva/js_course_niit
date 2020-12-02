'use strict';

//сумма "двух скобок"
function sum(a) {
    let sum = +a;
    function secondArg(b) {
        return sum += +b;
    }
    return secondArg;
};

//"Правильный ответ"
const idealSum = a => b => a + b;
console.log(sum(3)(4));

//копирование объекта с вложениями
//этот код прошёл все тесты верно
function copyData(object) {
    let copy = {};
    for (let key in object) {
        copy[key] = object[key];
        if (typeof object[key] == 'object') {
            if (Array.isArray(object[key])) {
                object[key] = [...object[key]];
            } else if (object[key] == null) {
                copy[key] = null;
            } else
                object[key] = { ...object[key] };
            copyData(object[key]);
        };
    };
    return copy;
}

//check
let user = {
    firstName: "John",
    fun: ['dance', 'walk'],
    actions: {
        sport: null,
        hobby: {
            home: [null, 'walk'],
            job: undefined,
        },
    },
    say(time, phrase) {
        console.log(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};

console.log(user);
let copyUser = copyData(user);
copyUser.actions.hobby.home = "golf";
console.log(copyUser);

const obj = {
    a: 1,
    b: 'str',
    c: null,
    d: undefined,
    obj: {
        a: 2,
        b: 'str2',
        c: null,
        obj2: {
            a: 3
        },
        arr2: [3, 4, 5]
    },
    arr: [1, 2, 3]
}

const newObj = obj;
let newObj = correctCopy(obj);

newObj.a = 2;
newObj.obj.a = 25;
newObj.arr[0] = 'str';
newObj.obj.arr2[0] = 'qwe';
newObj.obj.obj2.a = 12;

console.log('obj.a !== 2', obj.a !== 2)
console.log('obj.obj.a !== 25', obj.obj.a !== 25)
console.log("obj.arr[0] !== 'str'", obj.arr[0] !== 'str')
console.log("obj.obj.arr2[0] !== 'qwe'", obj.obj.arr2[0] !== 'qwe')
console.log("obj.obj.obj2.a !== 12", obj.obj.obj2.a !== 12)
console.log('newObj.c === null', newObj.c === null)














