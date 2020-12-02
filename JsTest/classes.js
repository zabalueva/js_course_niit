//5/13 функции-конструкторы => классы

class Car {
    constructor({ age, name,model }) {
        this.age = age;
        this.name = name;   
        this.carModel = model,
            this.carNumber = 1
    }   
    /* #speed */ //вычисляемое свойство через геттеры и сеттеры
    setAge = function (age) {
        this.age = age;
    }
    changeName(name) {
        this.name = name;
    }
//метод вызываемый без вызова как свойство возвращает вычисляемую переменную
    get bigName() {
        return this.name.toUpperCase;
    }

    set bigName(name) {
        console.log('set');
        this.name = '232'
        
    }
    ['test'.toUpperCase()] = 123; //вычисляемое свойство (название свойства)
//не добавляются в объект созданные от этого класса или унаследовавшего этот класс
    static nameToUpper(car) {
        return car.name.toUpperCase();
    }
}

class SmallCar extends Car{
    constructor(obj) {
        super(obj);
        this.smallAge = obj.age - 10;
    }

}

const ford = new SmallCar({ age: 25, name: 'Ford' });
const audi = new Car({ age: 2, name: 'Audi' });
ford.changeName('rbk')
console.log(Car.nameToUpper(ford));
console.log(ford instanceof Car);
ford.bigName = 'arg';
console.log(Car.nameToUpper(ford));
console.log(ford);

/* const arr = new Array();
console.log(arr instanceof Object); */

String.prototype.plus = function (number) {
    return +this + number;
}

console.log('5'.plus(10));