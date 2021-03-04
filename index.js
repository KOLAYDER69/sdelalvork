'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilm() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('rabotaet');
        } else {
            console.log('oshibka');
            i--;
        }
    }
}
rememberMyFilm();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено нихуя");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классный зритель');
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("ERRRRROR");
    }
}
detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else if (personalMovieDB.privat == true) {
        console.log("Данные скрыты от просмотра");
    }
}
showMyDB();


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр ${i}?`);
//     if (a != null && a != '' && a.length < 50) {
//     personalMovieDB.genres[a];
//     console.log('rabotaet');
//          }
//     }
// }
// writeYourGenres();

function writeYourGenres1() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;

    }
}
writeYourGenres1();


function first() {
    setTimeout(function () {
        console.log(1);

    }, 500)
}
// first();

function second() {
    console.log(2);
}


first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

let r = Math.floor(Math.random() * 100);
let s = Math.floor(Math.random() * 100);

function math(a, b) {
    return a + b;
}
console.log(math(r, s));

function reverseString(str) {

    return str.split("").reverse().join("");

}

reverseString("hello"); // olleh


//   const obj = new Object();


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: 'red',
    },
    admin: true,
    makeTest: function () {
        console.log("kakoy text budet otvechat za test");
    }
}
options.makeTest();
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
    }
}

for (let i in options) {
    console.log(options);
}


console.log(Object.keys(options).length);
for (let i in options) {
    console.log(options[i]);
}



let values = Object.values(options);
console.log(values);
let lrs = Object.entries(options);
console.log(lrs);
var keyCount = Object.keys(coordinates).length

options.admin = true;

console.log(options.admin);

let arr = ["arka", "durka", "murka"]
console.log(arr[1]);

arr.push("3");
arr.pop
console.log(arr);

console.log(arr.length);


let text = "kakoy to tekts";
console.log(text.split(",3"));