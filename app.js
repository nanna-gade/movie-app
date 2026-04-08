"use strict"; // Hjælper med at fange fejl

console.log("Hej fra JavaScript! ");

const message = "JavaScript er sejt!";
console.log(message);

const firstName = "Nanna";
const age = 25;
const isStudent = true;
const favoriteMovie = "Find Nemo";

console.log("Navn:", firstName);
console.log("Alder:", age);
console.log("Er studerende:", isStudent);
console.log("Yndlingsfilm:", favoriteMovie);

let mood = "træt";
console.log("Før:", mood);

mood = "klar til JavaScript";
console.log("Efter:", mood);

// Find h1 elementet
const heading = document.querySelector("h1");
console.log("Jeg fandt h1:", heading);

// Find count span
const countDisplay = document.querySelector("#counter");
console.log("Jeg fandt count:", countDisplay);

// Find knapperne
const clickButton = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");
console.log("Jeg fandt knapperne:", clickButton, resetButton);

// Ændr overskriften
heading.textContent = "Wow, jeg kan ændre tekst!";

// Ændr count tallet
countDisplay.textContent = "42";

// Ændr tekstfarve
heading.style.color = "yellow";

// Ændr baggrund på count
countDisplay.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
countDisplay.style.padding = "10px";
countDisplay.style.borderRadius = "10px";