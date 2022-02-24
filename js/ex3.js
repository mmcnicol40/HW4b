console.log(" HW 4 ex 3 - Arrays");

//const arrayofNum = [3, 11, 7, 2, 9, 10];
let arrayofNum = [];
let newNum = "";
let myCnt = 0;

//added this logic to allow for any #'s to be entered
while (newNum !== "STOP") {
  newNum = prompt("Enter a number or enter STOP to exit:");
  if ( newNum !== "STOP") {
    arrayofNum.push(Number(newNum));
  }
  myCnt = myCnt + 1;
}
if (arrayofNum.length > 0) {
  console.log(`You entered the following ${arrayofNum.length} words:`);
  for (let i = 0; i < arrayofNum.length; i++) {}
}

// interogate the array with for loop
let arraySum = 0;
let arrayMax = 0;
let arrayMin = arrayofNum[0];

for (let i = 0; i < arrayofNum.length; i++) {
  console.log(arrayofNum[i]);
  arraySum = arraySum + arrayofNum[i];
  if (arrayofNum[i] > arrayMax) {
    arrayMax = arrayofNum[i];
  }
  if (arrayofNum[i] < arrayMin) {
    arrayMin = arrayofNum[i];
  }
}
// print the values per hw request
console.log(`The sum of the array is ${arraySum}`);
console.log(`The max value of the array is ${arrayMax}`);
console.log(`The min value of the array is ${arrayMin}`);