console.log(" HW 4 ex 1 - Calculator");
let num1 = 0;
let num2 = 0;
let divop;

// prompt for values
let lowNum = prompt("Please enter a number:");
let highNum = prompt("Please enter a second number"); // input's type is string
let mathOP = prompt("What math operation would you like? valid entries are / X + -");
let nlowNum = Number(lowNum);  //converting string to numeric
let nhighNum = Number(highNum);

//calculating a value - by executing function "times" and leveraging case logic
function times(num1, num2, mathop) {
  switch (mathOP) {
    case "/":
      return num1 / num2;
      break;
    case "X":
      return num1 * num2;
      break;
    case "x":
      return num1 * num2;
      break;
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    default:
      console.log("Please re-enter a valid entry.");
  }
}
//call function times and pass arguments
number = times(nlowNum, nhighNum, mathOP);
//display values
console.log(`Output: ${nlowNum} ${mathOP} ${nhighNum} = ${number}`);

