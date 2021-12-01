// Все робити за допомоги js.
// - створити блок,

let div = document.createElement('div');

//     - додати йому класи wrap, collapse, alpha, beta

div.classList.add('collapse', 'alpha', 'beta')

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

div.innerText = 'Hello';
div.style.fontSize = '80px';
div.style.width = '300px';
div.style.height = '100px';
div.style.background = 'red';
div.style.color = 'orange';

// - додати цей блок в body.
document.body.appendChild(div)

// - клонувати його повністю, та додати клон в body.

let div_clone = div.cloneNode(true)
div_clone.innerText = 'OKTEN'
document.body.appendChild(div_clone)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let ul = document.getElementsByClassName('menu')[0];
let arr = ['Main','Products','About us','Contacts'];
for (const item of arr) {
   let li =  document.createElement('li');
    li.innerText = `${item}`
    ul.appendChild(li);
}
