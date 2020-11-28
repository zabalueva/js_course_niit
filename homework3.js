'use strict';

//сумма "двух скобок"
function sum(a) {
    let sum = +a;
    function secondArg(b) {
        return sum += +b;
    }
    return secondArg;
};
console.log(sum(3)(4));

//копирование объекта с вложениями
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

function correctCopy(object) {
    return Object.defineProperties({}, Object.getOwnPropertyDescriptors(object));
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

console.log(correctCopy(user));













