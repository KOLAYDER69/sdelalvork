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
        if (a != null && b != null && a != '' && b != '' && a.length <50) {
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