// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let squareReactangle = (a, b) => {return a*b};
// console.log(squareReactangle(5,7))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let squareRound = (r) => {return (Math.PI * Math.pow(r, 2))};
// console.log(squareRound(24))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let squareCylinder = (r, h) => {return 2 * Math.PI * r * h};
// console.log(squareCylinder(8, 24))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [8, 23, 24, 50];
// let array = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// array(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let p= (arg) => {document.write(`<p>${arg}</p>`)};
// p (prompt())

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let list = (arg) => {
//     document.write(`<ul>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`<li>${arg}</li>`);
//     document.write(`</ul>`);
// }
// list (prompt())

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let list_2 = (arg, prompt) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < prompt; i++) {
//         document.write(`<li>${arg}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list_2('element', prompt())

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let primitive_elements = [8, true, 24, true, 'Logos', false, 'Okten', true];
// let list_3 = (array) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < primitive_elements.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list_3(primitive_elements)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = [ {id: 81176, name: 'Gosha', age: 21}, {id: 45176, name: 'Rubik', age: 24}, {id: 409505, name: 'Rafik', age: 23}];
// let list_4 =  (array) => {
//     for (const item of array) {
//         document.write(`<div style="display: flex; flex-direction: row; margin: 15px; column-gap: 20px"; ><div>${item.id},</div> <div>${item.name},</div> <div>${item.age}</div></div>`)
//     }
// }
// list_4(array)