//  Reverse a string

// var inputString = "building";
// // console.log(inputString);

// function reverse(string) {
//   var reverser = string.split('').reverse().join('');
//   console.log(reverser);
// }

// reverse(inputString);

// Hardcode an array of words. Have a variable maxLength, push words that are less than the maxLength into a new array, and console.log that.

// var wordArray = ['apple', 'peach', 'pear', 'lemon', 'long words here'];
// var maxLength = 19; 

// var filteredArray = wordArray.filter(function(word){
//   return word.length < maxLength; 
// }) 
// console.log(filteredArray);


// GRADE JS
// Output the following letter grade from a variable with with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100. Try and use a switch statement.

var score = "string";

// if (score > 80 && score < 100) {
//   console.log("A");
// } else if (score > 70 && score <= 80) {
//   console.log("B");
// } 

// switch (true) {
//   case (score > 80 && score <= 100):
//     console.log("A");
//     break;

//   case (score <= 80 && score > 60):
//     console.log("B");
//     break;
   
//   case (score <= 60 && score > 40):
//     console.log("C");
//     break;

//   case (score <= 40 && score > 20):
//     console.log("D");
//     break;
  
//   case (score <= 20 && score > 0):
//     console.log("F");
//     break;

//   default:
//     console.log("You failed. Bad.");

//   } 

// PLURALIZER

// Take an input like

// thing = "cat"
// count = "5"
// and output the pluralized form of the word like "5 cats" or "1 dog"..

// var thing = "cat";
// var count = 10;


// function pluralizer(thing, count) {
//   var pluralize = count + " " + thing + "s";
//   console.log(pluralize);
// }

// pluralizer(thing, count);

// tempConvert.js

// Convert a temperature from F to C.

// Convert it to fahrenheit and output "NN°C is NN°F".
// Deduct 32, then multiply by 5, then divide by 9

var f = 102;
// var c =  

function tempConv(fahrenheit) {
  var c = ((fahrenheit - 32) * 5 / 9).toFixed();
  console.log(c + "°C is " + fahrenheit + "°F");  
}

tempConv(f);


