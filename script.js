const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

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
    rating = prompt("На склоько оцените его?", "");

    personalMovieDB.movies[movie] = rating;
}

console.log(personalMovieDB);