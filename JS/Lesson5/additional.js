// - Дано натуральное число n. Выведите все числа от 1 до n.

// let numbers = (n) => {
//     let arr = [];
//     for (let i = 0; i <= n; i++) {
//         console.log(i)
//
//     }
// }
// numbers(+prompt())

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let numbers = (a, b) => {
//     if (a<b) {
//     for (let i = a; i <= b; i++)
//         console.log(i)
//
//     }
//     else if (a>b) {
//         for (let i = a; i >= b; i--) {
//             console.log(i)
//
//         }
//     }
// }
// numbers(+prompt(), +prompt())

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// let arr = [9, 8, 0, 4];
// let replace = (array, index) => {
//     if (array.length - 1 !== index) {
//         for (let i = 0; i < array.length; i++) {
//             if (i === index) {
//                 let x = array[i + 1];
//                 array[i + 1] = array[i];
//                 array[i] = x;
//             }
//         }
//     } else {
//         console.log('error')
//     }
// }
// replace(arr, +prompt());
// console.log(arr)

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

// let arr = [1, 0, 6, 0, 3];
// let zero_to_end = (arr) => {
//     for (let index = 0; index < arr.length; index++){
//         let item = arr[index];
//             if (item === 0) {
//                 arr.push(item);
//                 arr.splice(index, 1);
//             }
//         }
//     return arr;
// }
// console.log(zero_to_end(arr))