// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function car(model, producer, year, maxspeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю' ${this.maxspeed} 'на годину`)
//     };
//     this.info = function (index) {
//         for (index in this) {
//             if (typeof this[index] !== 'function') {
//                 console.log(`${index} - ${this[index]}`)
//             }
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed
//     };
//     this.changeyear = function (newYear) {
//         this.year = newYear
//     };
//     this.driver = function (name) {
//         this.driver = name
//     }
//
// }
//
// let car1 = new car('Camaro', 'Chevrolet', '2009', 280, 4.5);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(100);
// car1.changeyear(2012);
// car1.driver('Rafik');
// console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class car {
//     constructor(model, producer, year, maxspeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю' ${this.maxspeed} 'на годину`)
//     };
//
//     info() {
//         for (let index in this) {
//             console.log(`${index} - ${this[index]}`)
//         }
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed
//     };
//
//     changeyear(newYear) {
//         this.year = newYear
//     };
//
//     driver(name) {
//         this.driver = name
//     }
//
// }
//
// let car1 = new car('Sedan', 'Lada', '2012', 180, 2.5);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(100);
// car1.changeyear(2014);
// car1.driver('Rafik');
// console.log(car1);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let arr_c = [
new Cinderella('Галя', 42, 45),
new Cinderella('Горпина', 56, 40),
new Cinderella('Олена', 45, 42),
new Cinderella('Марфа', 37, 46),
new Cinderella('Одарка', 40, 40),
new Cinderella('Циля', 41, 41),
new Cinderella('Клава', 51, 43),
new Cinderella('Баба Маруся', 68, 39),
new Cinderella('Єва', 24, 35),
new Cinderella('Каська', 50, 41)
    ]
console.log(arr_c);

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('Jeff', 30, 35);
console.log(prince);

let match = (arr_c, prince) => {
    for (let shkar of arr_c) {
        if (shkar.size === prince.shoe) {
            console.log(`Jeff ♥ ${shkar.name}`)
        }
    }
};
match(arr_c, prince)

let cinderella = arr_c.find(value => value.size === prince.shoe);
console.log('the shkar was lost by', cinderella.name)