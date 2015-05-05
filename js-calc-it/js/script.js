// <input type="button" name="seven" class="number"   value="7">

var firstNum = "";
var secondNum = "";
var getNumber = document.getElementsByClassName("number");

for (var i = 0; i < getNumber.length; i++) {
   getNumber[i].addEventListener('click', function(){
      if (firstNum === '') {
      console.log(this.value);
      var firstNum = this.value;
      firstNum = parseInt(this.value);
    } else {
      console.log(secondNum);
      // var secondNum = this.value;
      secondNum = parseInt(this.value);
    }
   });
 }

// for (var i = 0; i < getNumber.length; i++) {
//  getNumber[i].addEventListener('click', function(){
//     //storeFirstNum(this.value);
//     // console.log(getNumber[i]);
//     console.log(this.value);
//     var secondNum = this.value;
//     secondNum = parseInt(this.value);
//     // alert(getNumber);
//  });
// }

var getOperator = "";
var storeOperator = document.getElementsByClassName("operator");

for (var i = 0; i < storeOperator.length; i++) {
   storeOperator[i].addEventListener('click', function(){
      // console.log(getOperator[i]);
      console.log(this.value);
      getOperator = this.value;
   });
 }

console.log(firstNum);
console.log(secondNum);


//////////////////////////////////////////////////////////////////////////////
// // Display input
// function storeFirstNum(number) {
//  var displayScreen = document.getElementById('display');
//   displayScreen.value += firstNum;
//   return displayScreen.value;
//   console.log(displayScreen);
// }

// // var whichCalc = prompt("Which calculater would you like to use?");

 // if (getOperator === '-' | '+' | '/' | '*' ) {
  //var x = Number(prompt("What is the first number?"));
  // var y = Number(prompt("What is the second number?"));
  // var operate = prompt("What do you want to do with these two numbers?");
  
  switch (getOperator) { 
  case "+":
    result = (firstNum + secondNum);
    break; 
  
  case "-":
    result = (firstNum - secondNum);  
    break;
    
  case "/":
     result = (firstNum / secondNum);
    break;

  case "*":
     result = (firstNum * secondNum);
    break;
    
  default:
    result = "This is not an operater!";
    break; 
  } 


// else if (whichCalc === 'advanced') {
//   var advOperate = prompt("Do you want to sqrt or ^?");
//     switch (advOperate) {
//       case "sqrt":
//       var x = Number(prompt("What number do you want to Square?"));
//       result = Math.sqrt(x);
//       break;

//       case "^":
//       var x = Number(prompt("What's the first number you want to use?")); 
//       var y = Number(prompt("What's the second number you want to use?"));    
//       result = Math.pow(x, y);
//       break;
//   }
// }

// alert(result);
