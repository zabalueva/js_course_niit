//имя класса с большой буквы
/* многострочный комментарий
ваовао*/


/* for (let i = 0; i < 9; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
} */

/* let bool = true; 
let num = 1;
let str = 'hi';

const sum = bool + 15 + 10 + str + num  ;
console.log(sum); */

/* if (-3 > null) {
    console.log('true')
}
else {
    console.log('false')
    }

let a = null;
let message = a !== undefined ? a : 'Default'; 
console.log(message);

 */
/* let a = '112';
a !== '12' && console.log('Не равно');



let isEsistCar = !index == -1
car.toLowerCase().indexOf('a') === -1; */


/* 
let user = {
    firstName: "John",
    obj: {
        key: 'gym'
    },

    say(time, phrase) {
        console.log(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};

let userTalk = { ...user, obj: { ...user.obj } };//копирование объекта не по ссылке
console.log(userTalk.say("16:12", "Kidding"));

user.say('14:18', 'hi');

user.watch = function (film) {
    console.log(`${this.firstName} watches ${film}`);
};

user.watch("Tutsi");
console.log(Object.keys(user));
console.log(JSON.stringify(user));
const stringify = JSON.stringify(user);
const parsed = JSON.parse(stringify);
console.log(parsed);


function sayHello(obj) {
    const { name, age, car: { name: carName } = {} } = obj;
    console.log(carName)
}

sayHello({ name: '123', age: 25, car: {name: 'Ford'}}) */


//НИЖЕ НЕДОРАБОТАННЫЙ КОД
/* function sayHi(newName) {
    console.log(this);
    this.name = newName;
}
let obj = { name: 'Иван', age: 25, car: { name: 'Ford' } };
sayHi = sayHi.bind(obj); //привязывает к функции другой контекст, возвращает новую функцию 
console.log(sayHi('Кирилл')) */


/* let sayHi = function (name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}
let obje = { name: 'Иван', age: 25, car: { name: 'Ford' } };
sayHi.call(obje, "Петр", 36); //apply принимает массив аргументов, а call поштучно
console.log(obje) */


//самовызывающиеся функции

