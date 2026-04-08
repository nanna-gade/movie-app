"use strict";

const countDisplay = document.querySelector("#counter");
const clickButton = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");

console.log(countDisplay);
console.log(clickButton);
console.log(resetButton);


const heading = document.querySelector("h1");

clickButton.addEventListener("click", function () {
  console.log("Klik! ");
  heading.textContent = "Du klikkede! ";
});

let count = 0;

clickButton.addEventListener("click", function(){
    count = count + 1;
     countDisplay.textContent = count;
       if (count > 40) {
    countDisplay.style.color = "red";
       }
     if (count > 10) {
    countDisplay.style.color = "lightgreen";
  }
     if(count === 12){
        alert("du ramte 12 sejt");
     };
});

resetButton.addEventListener("click", function(){
    count = count = 0;
    countDisplay.textContent = count;
});


const minusButton = document.querySelector("#minus-button");

console.log(minusButton);

minusButton.addEventListener("click", function () {
  count = count - 1;
  countDisplay.textContent = count;
});