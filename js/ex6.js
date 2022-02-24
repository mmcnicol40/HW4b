console.log(" HW 4 ex 6 - Guess the Number");

let lowNum = prompt("Please enter your lower range #:");
let highNum = prompt("Please enter your upper range #"); // input's type is string
let countNum = prompt("How many random #'s to generate?");
let nlowNum = Number(lowNum);
let nhighNum = Number(highNum);
let ncountNum = Number(countNum);
let numAttempts = 0;
let rndnum = 0;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // max and min multiplied times the fraction moves the random # within my range
}

for (numAttempts = 0; numAttempts < ncountNum; numAttempts++) {
  const rndInt = randomIntFromInterval(nlowNum, nhighNum);
  console.log(rndInt, "random");
  rndnum = rndInt;
}
console.log("test");
console.log(`We generated ${ncountNum} random numbers for you.`);
let myguess = " ";
let nmyGuess = 0;
console.log("random # ", rndnum);
let myGuess = prompt("Guess the random # I generated");
nmyGuess = Number(myGuess);
console.log(`guess ${nmyGuess}    rndnum = ${rndnum}`);
console.log("guess matches", rndnum === nmyGuess);

let newWord = "";
let myCnt = 0;

//while ((rndnum !== nmyGuess) || (myGuess !== "STOP")) {
// myGuess = prompt("Guess the random # I generated or STOP to exit");
 // if (newWord !== "STOP") {
  //   console.log("STOP TYPED");
