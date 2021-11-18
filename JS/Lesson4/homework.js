// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function squareReactangle(a, b) {
//     return a * b;
// }
//
// console.log(squareReactangle(8, 24))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let p = 3.14;
// function squareRound(p, r) {
//     return p * Math.pow(r, 2);
// }
//
// console.log(squareRound(p, 24))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let p = 3.14;
//
// function squareCylinder(p, r, h) {
//     return 2 * p * r * h;
// }
//
// console.log(squareCylinder(p, 8, 24))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [8, 23, 24, 50];
//
// function array(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//
//     }
// }
//
// array(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph (arg){
//     document.write(`<p>${arg}</p>`)
// }
//
// paragraph('complete')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list (arg) {
//     document.write(`<ul>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`</ul>`);
// }
// list ('list_elements')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list_2 (arg, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${arg}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// list_2('element', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [8, true, 24, true, 'Logos', false, 'Okten', true];
// function list_3 (array) {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// list_3(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = [ {id: 81176, name: 'Gosha', age: 21}, {id: 45176, name: 'Rubik', age: 24}, {id: 409505, name: 'Rafik', age: 23}];
// function list_4 (array) {
//     for (const item of array) {
//         document.write(`<div>${item.id}, ${item.name}, ${item.age}</div>`)
//     }
// }
// list_4(array)