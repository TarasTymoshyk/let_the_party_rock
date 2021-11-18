// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function let_min (a, b, c) {
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
// let_min (8 , 23, 24)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function let_min (a, b, c) {
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
// let_min (8 , 23, 24)

// - створити функцію яка повертає найбільше число з масиву

// let numbers1 = [8, 23, 3, 24]
// function maX (numbers) {
//     let maxNumber = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > maxNumber) {
//             maxNumber = numbers[i];
//         }
//     }
//     return maxNumber;
// }
// document.write(maX(numbers1))

// - створити функцію яка повертає найменьше число з масиву

// let numbers1 = [8, 23, 3, 24]
// function maX (numbers) {
//     let minNumber = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < minNumber) {
//             minNumber = numbers[i];
//         }
//     }
//     return minNumber;
// }
// document.write(maX(numbers1))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let numbers = [8, 23, 3, 24];
//
// function summ(numbers1) {
//     let sum = 0;
//     for (const number of numbers) {
//         sum = sum + number;
//
//     }
//     return sum;
// }
//
// console.log(summ(numbers))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let numbers = [13, 23, 24];
// function average (num) {
//     let avg = 0;
//     for (const number of num) {
//         avg += number; //  avg = avg + number
//     }
//     return avg/num.length
// }
//
// console.log(average(numbers));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function returnmin_logmax() {
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
//
// }
//
// console.log(returnmin_logmax(10, 20, 50, 1))