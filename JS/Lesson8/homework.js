// // - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//
//
// // -- отримує текст з параграфа з id "content"

// let x = document.getElementById('content');
// console.log(x.innerText);
//
// // -- отримує текст з блоку з id "rules"

// let y = document.getElementById('rules');
// console.log(y.textContent)
//
// // -- замініть текст параграфа з id 'content' на будь-який інший

// let pListX = document.getElementById('content');
// pListX.innerText = 'будь-який інший замінений тест';
// console.log(pListX.textContent);
//
// // -- замініть текст параграфа з id 'rules' на будь-який інший

// let pListY = document.getElementById('rules');
// pListY.innerText = 'будь-який ще інший замінений тест';
// console.log(pListY.textContent);
//
// // -- змініть кожному елементу колір фону на червоний
// // -- змініть кожному елементу колір тексту на синій

// let color = document.getElementsByTagName("body");
// for (const element of color) {
//     element.style.background = 'red';
//     element.style.color = 'navy';
// }
// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(y.classList); // вже є у 2 завданні
//
// // -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let color_class = document.getElementsByClassName('fc_rules')
// for (const newColor of color_class) {
//     newColor.style.color = 'darkred'
// }