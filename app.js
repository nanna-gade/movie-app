"use strict";

// ALT DETTE ER FRA OPGAVE 2 (ARRAYS & LOOPS):
// console.log("Movie App starter...");

// // Man kan også samle sit array/listen af film i et array, istedet for at lave EN variabel per film:
// const movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Pulp Fiction", "Barbie", "The Notebook"];

// console.log("Alle flm:", movies);

// console.log("Første film:", movies[0]);
// console.log("Anden film:", movies[1]);
// console.log("Sidste film:", movies[3]);

// console.log("Antal film:", movies.length);

// const movieList = document.querySelector("#movie-list");
// console.log(movieList);

// for (const movie of movies) {
//   const html = /* html */ `
//     <article class="movie-card">
//       <div class="movie-info">
//         <h3>${movie}</h3>
//       </div>
//     </article>
//   `;

//   movieList.insertAdjacentHTML("beforeend", html);
// }

// KODE FRA OPGAVE 3.1:
// const movie = {
//   title: "Inception",
//   year: 2010,
//   rating: 8.8,
// };

// console.log("Titel:", movie.title);
// console.log("År:", movie.year);
// console.log("Rating:", movie.rating);


// Et array af objects
const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
  },
];

console.log("Første film:", movies [0]);
console.log("Anden film:", movies[1]);

// Loop gennem arrayet af objects
for (const movie of movies) {
  console.log("Titel:", movie.title);
}


