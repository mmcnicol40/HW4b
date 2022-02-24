console.log(
  " HW 4 ex 1 - Circle Modeling ... eventually for now... better calculator"
);
console.log(" HW 4 ex 5 - Count the vowels");

let myCnt = 0;

let newWord = prompt("Enter a word");

const len = newWord.length;
//console.log(len);

const originalWord = newWord;

let lowercaseWord = originalWord.toLowerCase();
//console.log(lowercaseWord);

let uppercaseWord = originalWord.toUpperCase();
//console.log(uppercaseWord);

const tmpName = newWord;
let myWordlist = [];
let myVowllist = [];
let bkWordlist = [];

for (let i = 0; i < lowercaseWord.length; i++) {
  if (
    lowercaseWord[i] === "a" ||
    lowercaseWord[i] === "e" ||
    lowercaseWord[i] === "i" ||
    lowercaseWord[i] === "o" ||
    lowercaseWord[i] === "u" ||
    lowercaseWord[i] === "y"
  ) {
    //console.log("test");
    //console.log(lowercaseWord[i]);
    myVowllist.push(lowercaseWord[i]);
    //myWordlist.push(lowercaseWord[i]);
  }
  myWordlist.push(lowercaseWord[i]);
  //
}
//reverse engineering
for (let i = lowercaseWord.length - 1; i >= 0; i--) {
  {
    bkWordlist.push(lowercaseWord[i]);
  }
//console.log(lowercaseWord[i]);
 // console.log(myVowllist.length);
//  console.log(myVowllist);
 // console.log("DONE");
} // moved from bottom
//console.log(bkWordlist.length);
//console.log(myWordlist);
//console.log(bkWordlist);
//console.log(myVowllist);
//console.log(myWordlist.toString() === bkWordlist.toString());
let isPalin = myWordlist.toString() === bkWordlist.toString();
let palintxt = "";
if ((isPalin === false)) {
 //console.log("its FALSE");
  palintxt = "not";
}
//console.log(isPalin);
//console.log(palintxt);
console.log(
  `"${newWord}" contains ${myVowllist.length} vowel(s) and is ${palintxt} a palindrome.`
);
//}
