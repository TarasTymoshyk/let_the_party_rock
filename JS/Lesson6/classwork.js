// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// let x = (str) => {
//     let n11 = n1.replaceAll('..', ' ');
//     let n21 = n2.replaceAll('---', ' ');
//     let n31 = n3.replaceAll('__', ' ');
//     return [n11, n21, n31];
// }
// console.log(x([n1, n2, n3]));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let randomizer = (num) => {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push(Math.floor(Math.random() * 100));
//     }
//     return arr;
// };
// let array = randomizer(10)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// array.sort((v1, v2) => (v1-v2));
// console.log(array)


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let filter = array.filter((value) => {
//     if (value % 2 ===0) {
//         return value
//     }
//
// })
// console.log(filter)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let filter_string = (num) => {
//     return filter.map(value => value.toString())
// }
// console.log(filter_string(filter));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11,21,3];
// let sortNums = (nums, value) => {
//     if (value === 'ascending') {
//         return nums.sort((a, b) => a-b);
//     }
//     else if (value === 'descending') {
//         return nums.sort((a, b) => b-a);
//     }
//     else {
//         alert('error');
//     }
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// let des_md = coursesAndDurationArray.sort((x,y) => y.monthDuration-x.monthDuration)
// console.log(des_md);

// let filter = coursesAndDurationArray.filter((value) => {
//         return value.monthDuration > 5;
//     }
// )
// console.log(filter)

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let str = 'наслаждение';
// let cutString = (str, n) => {
//     let arr = [];
//     while (str.length) {
//         arr.push(str.substr(str, n))
//         str = str.slice(n)
//     }
//     return arr;
// }
// console.log(cutString(str, 3))