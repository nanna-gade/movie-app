"use strict";

console.log("Movie App starter...");

// Man kan også samle sit array/listen af film i et array, istedet for at lave EN variabel per film:
const movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Pulp Fiction", "Barbie", "The Notebook"];

console.log("Alle flm:", movies);

console.log("Første film:", movies[0]);
console.log("Anden film:", movies[1]);
console.log("Sidste film:", movies[3]);

console.log("Antal film:", movies.length);

const movieList = document.querySelector("#movie-list");
console.log(movieList);

for (const movie of movies) {
  const html = /* html */ `
    <article class="movie-card">
      <div class="movie-info">
        <h3>${movie}</h3>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}



