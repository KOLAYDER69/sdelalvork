"use strict";

let numberOfFilms = prompt ("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const lastMovie = prompt ('Один из последних просмотренных фильмов?', ''),
          lastMovieRate = prompt ('На сколько вы его оцените?', '');
    if (lastMovie != null &&  lastMovieRate != null && lastMovie != '' && lastMovieRate != '' && lastMovie.length < 50) {
    personalMovieDB.movies[lastMovie] = lastMovieRate;
    console.log('done');
    } else {
    console.log('error');
    i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('хуёво глянул, браток');
} else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
    console.log ('уже лучше');
} else if (personalMovieDB.count >= 30) {
    console.log ('лучший за работой');
} else {
    console.log ('хуета');
}

console.log(personalMovieDB);