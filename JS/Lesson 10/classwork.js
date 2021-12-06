//    - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//        Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//    Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

let f1 = document.createElement('form');
let f2 = document.createElement('form');
let i1 = document.createElement('input');
let i2 = document.createElement('input');
let i3 = document.createElement('input');
let i4 = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = 'press';

f1.setAttribute('name', 'f1');
f2.setAttribute('name', 'f2');
i1.setAttribute('name', 'i1');
i2.setAttribute('name', 'i2');
i3.setAttribute('name', 'i3');
i4.setAttribute('name', 'i4');

f1.append(i1,i2);
f2.append(i3,i4);

document.body.appendChild(f1);
document.body.appendChild(f2);
document.body.appendChild(btn);

btn.addEventListener('click', function (){
    console.log(i1.value);
    console.log(i2.value);
    console.log(i3.value);
    console.log(i4.value);
})