// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

// a) змінює текст елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)

// let rename_h1 = document.getElementsByTagName('h1');
// rename_h1.innerText = 'sept-21';
// console.log(rename_h1.innerText);

// b) робить шириниу елементу ul 400px

// let ul400 = document.getElementsByTagName("ul")
// for (const ul of ul400) {
//     ul.style.width = '400px';
//     ul.style.padding = '0' // для видимості
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let linkList50 = document.getElementsByClassName('linkList')
// for (const element of linkList50) {
//     element.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// // function addText (text) {
// //     let ElementsByClassName = document.getElementsByClassName('listElement2');
// //     ElementsByClassName.innerText = text;
// // }

// або

// let addText = document.getElementsByClassName('listElement2');
// for (let i = 0; i < addText.length; i++) {
//     console.log(addText[i].textContent);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let lishki = document.getElementsByTagName('li');
// for (const lishkiElement of lishki) {
//     lishkiElement.style.background = 'silver';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let aShki = document.getElementsByTagName('a');
// for (const aShkiElement of aShki) {
//     aShkiElement.classList.add('anchor')
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// for (const aShkiElement of aShki) {
//     if (aShkiElement.innerText === 'link3') {
//         aShkiElement.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// for (const aShkiElement of aShki) {
//     let element_XXX = aShkiElement.innerText;
//     aShkiElement.classList.add(element_XXX)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let s_h_e = document.getElementsByClassName('sub-header');
// for (const value of s_h_e) {
//     value.style.background = prompt('choose color')
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// for (const value of s_h_e) {
//     if (value.innerText === 'content 2 segment' )    {
//         value.style.color = prompt('choose color again')
//     }
// }

// k) отримує елемент
//  з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let x = document.getElementsByClassName('content_1')
// for (const x1 of x) {
//     x1.innerText = prompt()
// }

// l) отримати елементи p та змінити їм padding на 20px

// let pAll = document.getElementsByTagName('p')
// for (const p of pAll) {
//     p.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let last = document.getElementsByClassName('text2');
// for (const lastElement of last) {
//     lastElement.innerText = 'sept-2021';
// }
