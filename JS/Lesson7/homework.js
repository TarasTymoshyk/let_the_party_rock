// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function user(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arr = [
    new user(11, 'Kobe', 'Bryant', 'kb@gmail.com', 482644589132),
    new user(243, 'Michael', 'Jordan', 'mj@gmail.com', 484512389132),
    new user(3, 'Vince', 'Carter', 'vc@gmail.com', 482743634565),
    new user(4574, 'Carmelo', 'Anthony', 'ca@gmail.com', 4826456271234),
    new user(55, 'Shaquille', 'Oneal', 'so@gmail.com', 482698677786),
    new user(643, 'Tracy', 'McGrady', 'tm@gmail.com', 48264423462413),
    new user(712, 'Kevin', 'Garnett', 'kg@gmail.com', 482648518375),
    new user(88556, 'Steve', 'Nash', 'sn@gmail.com', 482641238888),
    new user(92, 'Allen', 'Iverson', 'ai@gmail.com', 482644546443),
    new user(1012, 'Magic', 'Johnson', 'm_j@gmail.com', 482644908909)
]
console.log(arr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let arr_f = arr.filter(value => {
    return value.id % 2 === 0;
})
console.log(arr_f)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let arr_s = arr.sort((a, b) => {
    return a.id - b.id;
})
console.log(arr_s);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client extends user {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}
let array = [
        new Client(11, 'Kobe', 'Bryant', 'kb@gmail.com', 482644589132, ['ball', 'shoes']),
    new Client(243, 'Michael', 'Jordan', 'mj@gmail.com', 484512389132, ['basket', 'ball', 'jersey']),
    new Client(3, 'Vince', 'Carter', 'vc@gmail.com', 482743634565, []),
    new Client(4574, 'Carmelo', 'Anthony', 'ca@gmail.com', 4826456271234, ['ball']),
    new Client(55, 'Shaquille', 'Oneal', 'so@gmail.com', 482698677786, ['jersey1', 'jersey2', 'ball1', 'ball2']),
    new Client(643, 'Tracy', 'McGrady', 'tm@gmail.com', 48264423462413, ['strap', 'ball', 'ring', 'shoes', 'jersey']),
    new Client(712, 'Kevin', 'Garnett', 'kg@gmail.com', 482648518375, ['ball', 'rim', 'shoes', 'jersey']),
    new Client(88556, 'Steve', 'Nash', 'sn@gmail.com', 482641238888, ['ball', 'jersey']),
    new Client(92, 'Allen', 'Iverson', 'ai@gmail.com', 482644546443, ['jersey1', 'jersey2', 'ball1', 'ball2']),
    new Client(1012, 'Magic', 'Johnson', 'm_j@gmail.com', 482644908909, ['jersey'])
];
let array_sort = array.sort((a, b) => a.order.length - b.order.length)
console.log(array_sort);