'use strict';

let numberOfFilms;

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

//rememberMyFilms();
//detectPersonalLevel();
writeYourGenres();
showMyDB();

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
        if (genre != null && genre != "") {
            personalMovieDB.genres[i] = genre;
        } else {
            i--;
        }
    }
}

function showMyDB() {
    if(!personalMovieDB.private) {
        console.log(personalMovieDB);
    }
}

function start() {
    do {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    } while (numberOfFilms == null || numberOfFilms === "" || isNaN(numberOfFilms));
}

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
        console.log("Вы классический зритель");
    } else if (numberOfFilms > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const movie = prompt("Один из просмотренных фильмов?", "");
        const rating = prompt("На сколько оцените его?", "");

        if (movie != null && rating != null && movie != "" && rating != "" && movie.length < 50) {
            personalMovieDB.movies[movie] = rating;
        } else {
            i--;
        }
    }
}