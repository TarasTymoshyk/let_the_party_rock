// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//

// let numbers = [0,3,6,23,24];
// let players = ['Kobe', 'Lebron', 'MJ', 'Magic', 'Larry'];
// let the_truth = [2006,'Kobe', 81, 'points', true];
// console.log(numbers);
// console.log(players);
// console.log(the_truth);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0]='Наповнюємо масив';
// arr[1]=true;
// arr[2]='значеннями';
// arr[3]='в наступне значення вфігачу улюблене число';
// arr[4]=24;
// console.log(arr)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i <10; i++) {
//     document.write(`<div>довільний текст всередині</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i <10; i++) {
//     document.write(`<div>йой, треба ще індекс ${i} додати</div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i<20) {
//     document.write(`<h1>random text inside</h1>`);
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i<180) {
//     document.write(`<h1>random text inside with index ${i}</h1>`);
//     i+=9
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numbers = [ 0, 3 , 6, 8, 23, 24, 30, 50, 75, 99];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let words = ['не', 'ищите', 'логики', 'в', 'моих', 'действиях', 'просто', 'я', 'хочу', 'спать'];
// for (let i = 0; i < words.length; i++) {
//     console.log(words[i])
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let any = ['okten', true, 'logos', false, 'horosho','chto', 'ya', 'ne_vybral', 'govnokursy', ':D'];
// for (let i = 0; i < any.length; i++) {
//     console.log(any[i])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = [24, 'Kobe', true, 'player', 'never', 'choose', false, 'team', 'and', 1];
// for (let i = 0; i < arr.length; i++) {
//    if (typeof arr[i]==="boolean") {
//        console.log(arr[i])
//    }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = [24, 'Kobe', true, 'player', 'never', 'choose', false, 'team', 'and', 1];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i]==='number') {
//         console.log(arr[i])
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [24, 'Kobe', true, 'player', 'never', 'choose', false, 'team', 'and', 1];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i]==="string") {
//         console.log(arr[i])
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array = [];
// array[0] = 'Че то';
// array[1] = 'уже';
// array[2] = 0;
// array[3] = 'фантазии';
// array[4] = 'придумать';
// array[5] = true;
// array[6] = 'пример';
// array[7] = 1;
// array[8] = false;
// array[9] = 'мысли';
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i < 11; i++) {
//     console.log('Поточний номер кроку ' + i + ' ');
//     document.write('поточний номер кроку ' + i + ' ');
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i < 101; i++) {
//     console.log('Поточний номер кроку ' + i + ' ');
//     document.write('поточний номер кроку ' + i + ' ');
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i < 101; i+=2) {
//     console.log('Поточний номер кроку ' + i + ' ');
//     document.write('поточний номер кроку ' + i + ' ');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 1; i < 101; i++) {
//     if (i % 2 === 0) {
//         console.log('Тільки парні кроки ' + i + ' ');
//         document.write('Тільки парні кроки ' + i + ' ');
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i < 101; i++) {
//     if (i % 2 === 1) {
//         console.log('Тільки непарні кроки ' + i + ' ');
//         document.write('Тільки непарні кроки ' + i + ' ');
//     }
// }