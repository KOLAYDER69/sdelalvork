/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

"use strict";

let r = Math.floor(Math.random()*10);
if (4 == r) {
    console.log("OK!");
} else {
    console.log("ERRROR");
}
console.log(r);

const num = 50;
if (num < 49) {
    console.log('ERRRRRKA');
} else if (num > 100) {
    console.log("mnogo");
} else {
    console.log("OK!");
}

(num === 50) ? console.log("OK!") : console.log('ERRRRRKA');

const numx = 50;
switch (numx) {
    case 49:
        console.log("erka");
        break;
    case 100:
        console.log('ERKA');
        break;
    case 50:
        console.log("GOOD");
        break;
    default:
        console.log("ne v etot raz");
        break;
}

const num1 = 50;
while (num < 55) {
    console.log(num);
    num++;
    
}

let num2 = 50;
do {
    console.log(num2);
    num2++;
}
while (num2 < 55);

let num3 = 50;
for (let i = 1; i < 8; i++) {
    console.log(i);
    num3++;
}

let number = 20;

function showFirstMessage(text) {
    console.log(text);
    number = 10;
}
showFirstMessage("hey");
console.log(number);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));


const str = "test";
const ar = [1, 2, 4];
console.log(str.toUpperCase());
console.log(str.length);

let fruit = "some fruit";
console.log(fruit.indexOf("fruit"));