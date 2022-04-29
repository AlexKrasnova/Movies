'use strict';

let numberOfFilms;

do {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
} while (numberOfFilms == null || numberOfFilms === "" ||  isNaN(numberOfFilms));



if (numberOfFilms < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert("Вы классический зритель");
} else if (numberOfFilms > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let movie;
let rating;

for (let i = 0; i < 2; i++) {
    movie = prompt("Один из просмотренных фильмов?", "");
    rating = prompt("На сколько оцените его?", "");

    if (movie != null && rating != null && movie != "" && rating != "" && movie.length < 50) {
        personalMovieDB.movies[movie] = rating;
    } else {
        i--;
    }
}

console.log(personalMovieDB);