//    - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//        Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//    Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

// let f1 = document.createElement('form');
// let f2 = document.createElement('form');
// let i1 = document.createElement('input');
// let i2 = document.createElement('input');
// let i3 = document.createElement('input');
// let i4 = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'press';
//
// f1.setAttribute('name', 'f1');
// f2.setAttribute('name', 'f2');
// i1.setAttribute('name', 'i1');
// i2.setAttribute('name', 'i2');
// i3.setAttribute('name', 'i3');
// i4.setAttribute('name', 'i4');
//
// f1.append(i1,i2);
// f2.append(i3,i4);
//
// document.body.appendChild(f1);
// document.body.appendChild(f2);
// document.body.appendChild(btn);
//
// btn.addEventListener('click', function (){
//     console.log(i1.value);
//     console.log(i2.value);
//     console.log(i3.value);
//     console.log(i4.value);
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let i1 = document.createElement('input');
// let i2 = document.createElement('input');
// let i3 = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'press'
// document.body.append(i1, i2, i3, btn);
//
// btn.addEventListener('click', function () {
//     let row = i1.value;
//     let column = i2.value;
//     let content = i3.value;
//
//     function createTable(row, column, content) {
//         let table = document.createElement('table');
//         document.body.appendChild(table);
//         for (let i = 0; i < row; i++) {
//             let row = document.createElement('tr');
//             for (let j = 0; j < column; j++) {
//                 let column = document.createElement('td');
//                 column.innerText = `${content}`;
//                 table.appendChild(row);
//                 row.appendChild(column);
//             }
//         }
//     }
//     createTable (row, column, content);
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['Logos', 'Курва']
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'valid';
// document.body.append(input, button)
//
// button.onclick = function () {
//     let item = input.value;
//     for (const element of badWords) {
//         if (element === item){
//             alert('Shut the f*ck up')
//         }
//     }
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['Logos', 'Курва']
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'valid';
// document.body.append(input, button)
//
// button.onclick = function () {
//     let item = input.value;
//     for (const element of badWords) {
//         if (item.includes(element)) {
//             alert('Shut the f*ck up')
//         } else {
//             alert('clean')
//         }
//     }
// }