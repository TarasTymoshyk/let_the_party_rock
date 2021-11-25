// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let string1 = 'hello world';
// let string2 = 'lorem ipsum';
// let string3 = 'javascript is cool';
// console.log(string1.length, string2.length, string3.length);
//
// let x = string1.toUpperCase();
// console.log(x);
//
// let y=x.toLowerCase()
// console.log(y);
//
// let str = ' dirty string   ';
// let clean = str.trim()
// console.log(clean);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// let arr = stringToArray (str);
// console.log(arr);
// function stringToArray(str) {
//     return str.split(' ')
// }

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// function delete_characters (str, index) {
//     return str.substring(0, index);
// }
// document.write(delete_characters(str, 7))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//     let x = str.replaceAll(' ', '-');
//     return x.toUpperCase()
// }
// console.log(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'logos s*cks'
// let foo = (str) => {
//     return str[0].toUpperCase().concat(str.slice(1))
// }
// console.log(foo(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'okten the best';
// function capitalize(str) {
//     return str.replace(/(^|\s)\S/g, function (a) {
//         return a.toUpperCase()
//     })
// }
// document.write(capitalize(str));

