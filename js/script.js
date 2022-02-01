"use strict";
// let number = 5;
// const leftBorderWidth = 1;

// console.log(leftBorderWidth);

// alert(5);
// [].push('a');

//Lesson-6
// // const result = confirm("Are you here?");
// // console.log(result);

// // const answer = prompt("Are you 18?");
// // console.log(answer + 5);

//Lesson-7
// const answers = [];

// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('What your surename?', '');
// answers[2] = prompt('How old are you?', '');

// document.write(answers);

// console.log(typeof(answers))

//Lesson-8
// const category = 'cars';
// const Category = 'hoouse';

// console.log('https://someurl.com/' + (category));
// console.log(`https://someurl.com/${Category}`);

//Lesson-9
//     console.log('arr' + '+ 3');
// const newLocal = "5";
//     console.log(4 + newLocal);

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

//Lesson-12
const numberOfFilms = +prompt('Сколькл фильмов вы посмотрели?', '');

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('На сколько оцените его?', '');

      personaMovieDB.movies[a] = b;
      personaMovieDB.movies[c] = d;

      console.log(personaMovieDB);