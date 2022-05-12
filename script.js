'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
            if (genre != null && genre != "") {
                personalMovieDB.genres[i] = genre;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((genre, index) => {
            console.log(`Любимый жарн №${index + 1} - это ${genre}`);
        });
    },
    showMyDB: function () {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },
    start: function () {
        do {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        } while (personalMovieDB.count == null || personalMovieDB.count === "" || isNaN(personalMovieDB.count));
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const movie = prompt("Один из просмотренных фильмов?", "").trim();
            const rating = prompt("На сколько оцените его?", "");

            if (movie != null && rating != null && movie != "" && rating != "" && movie.length < 50) {
                personalMovieDB.movies[movie] = rating;
            } else {
                i--;
            }
        }
    },
    toddleVisibleMyDB: function() {
        if(personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();
// personalMovieDB.toddleVisibleMyDB();
// personalMovieDB.showMyDB();
// personalMovieDB.toddleVisibleMyDB();
// personalMovieDB.showMyDB();