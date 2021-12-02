// Все робити за допомоги js.
// - створити блок,

// let div = document.createElement('div');

//     - додати йому класи wrap, collapse, alpha, beta

// div.classList.add('collapse', 'alpha', 'beta')

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

// div.innerText = 'Hello';
// div.style.fontSize = '80px';
// div.style.width = '300px';
// div.style.height = '100px';
// div.style.background = 'red';
// div.style.color = 'orange';

// - додати цей блок в body.

// document.body.appendChild(div)

// - клонувати його повністю, та додати клон в body.

// let div_clone = div.cloneNode(true)
// div_clone.innerText = 'OKTEN'
// document.body.appendChild(div_clone)


// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let ul = document.getElementsByClassName('menu')[0];
// let arr = ['Main','Products','About us','Contacts'];
// for (const item of arr) {
//    let li =  document.createElement('li');
//     li.innerText = `${item}`
//     ul.appendChild(li);
// }

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.innerText = `${course.title},  ${course.monthDuration} month`;
//     document.body.appendChild(div);
// }

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//
//     h1.classList.add('heading');
//     h1.innerText = course.title;
//
//     p.classList.add('description')
//     p.innerText = course.monthDuration;
//
//     document.body.appendChild(div);
//     div.appendChild(h1);
//     div.appendChild(p);
// }
