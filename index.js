let numberOfFilms = prompt("Сколько фильмов вы уже смотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastMovie = prompt("Какой последний фильм смотрели?", "");
let lastRate = prompt("На сколько его оцените?", "");


personalMovieDB.movies = {
    [lastMovie]: lastRate
};

console.log(personalMovieDB);

