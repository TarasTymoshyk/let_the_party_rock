
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


// let square = document.getElementById('text');
// let btn = document.getElementById('hidden')
//     btn.onclick = function (click) {
//         square.style.display = 'none'
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btn = document.getElementById('hidden')
//     btn.onclick = function (click) {
//         btn.style.display = 'none'
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let number = document.getElementById('btn');
//     number.onclick = function () {
//     let age = document.getElementById('age').value;
//         if  (age < 18) {
//             alert('You shall not pass!!!');
//         } else {
//             alert('Welcome!');
//         }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
//

// let dropdown = document.querySelector('.dropdown');
// let element = dropdown.querySelector('.element');
// element.onclick = function () {dropdown.classList.toggle('hidden')}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {title: 'Рафик', body: 'Шашлыка хочу'},
//     {title: 'Рубик', body: 'Вай! такси такой дорогой!'},
//     {title: 'Ахмед', body: 'Same tru cum halem'},
// ];
// let main_div = document.createElement('div');
// for (const element of comments) {
//     let div = document.createElement('div');
//     let b = document.createElement('b');
//     let p = document.createElement('p');
//     let button = document.createElement('button');
//
//     b.innerText = element.title;
//     p.innerHTML = element.body;
//     button.innerHTML = 'close';
//
//     button.onclick = () => {
//         p.classList.add('pHidden');
//         button.previousElementSibling.classList.add('pHidden');
//     }
//     div.append(b, p, button)
//     main_div.append(div)
// }
// document.body.appendChild(main_div)