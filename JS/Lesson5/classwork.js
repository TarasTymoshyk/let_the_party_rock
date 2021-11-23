// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let min = (a, b, c) => {
//     if (a<b && a<c) {
//         console.log(a)
//     }
//     else if (b<a && b<c) {
//         console.log(b)
//     }
//     else {
//         console.log(c)
//     }
// }
// min (8 , 23, 24)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let max = (a, b, c) => {
//     if (a>b && a>c) {
//         console.log(a)
//     }
//     else if (b>a && b>c) {
//         console.log(b)
//     }
//     else {
//         console.log(c)
//     }
// }
// max (8 , 23, 24)

// - створити функцію яка повертає найбільше число з масиву

// let numbers = [8, 23, 3, 24];
// let maX = (numbers) => {
//     let maxNumber = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > maxNumber) {
//             maxNumber = numbers[i];
//         }
//     }
//     return maxNumber;
// }
// document.write(maX(numbers))

// - створити функцію яка повертає найменьше число з масиву

// let numbers = [8, 23, 3, 24]
// let miN = (numbers) => {
//     let minNumber = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < minNumber) {
//             minNumber = numbers[i];
//         }
//     }
//     return minNumber;
// }
// document.write(miN(numbers))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let numbers = [8, 23, 3, 24];
// let summ =(numbers) =>{
//     let sum = 0;
//     for (const number of numbers) {
//         sum = sum + number;
//     }
//     return sum;
// }
// console.log(summ(numbers))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let numbers = [13, 23, 24];
// let average = (num) => {
//     let avg = 0;
//     for (const number of num) {
//         avg += number;
//     }
//     return avg/num.length
// }
// console.log(average(numbers));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let returnmin_logmax = (...arguments) => {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (const number of arguments) {
//         if (number < min) {
//             min = number
//         } else if (number > max) {
//             max = number
//         }
//     }
//     console.log(max)
//     return min;
// }
// console.log(returnmin_logmax(10, 20, 50, 1))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let array_randomizer = () => {
//     let arr = [];
//     for (let i = 0; i < 100; i++) {
//         arr[i] = (Math.round(Math.random() * 100))
//     }
//     return arr;
// }
// console.log(array_randomizer())

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let array_randomizer = () => {
//     let limit = prompt()
//     let arr = [];
//     for (let i = 0; i < limit; i++) {
//         arr[i] = (Math.round(Math.random() * limit))
//     }
//     return arr;
// }
// console.log(array_randomizer())

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array = [8, 23, 24];
// let reverse =(array) => {
//     let reverse = [];
//     while (array.length) {
//         reverse.push(array.pop());
//     }
//     return reverse;
// }
// console.log(reverse(array))