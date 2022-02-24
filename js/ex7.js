console.log(" HW 4 ex 7 - Random fun");

// just having fun with a random # generator;  Provide a low and high range PLUS # of random #s

let lowNum = prompt("Please enter your lower range #:");
let highNum = prompt("Please enter your upper range #"); // input's type is string
let countNum = prompt("How many random #'s to generate?");
let nlowNum = Number(lowNum);
let nhighNum = Number(highNum);
let ncountNum = Number(countNum);
let numAttempts = 0;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);  // max and min multiplied times the fraction moves the random # within my range
}

for (numAttempts = 0; numAttempts < ncountNum; numAttempts++) {
  const rndInt = randomIntFromInterval(nlowNum, nhighNum);
  console.log(rndInt, "random");
}
