var total1 = 0;
var total2 = 0;
var newBalance1 = 0;
var newBalance2 = 0;

$(document).ready(function() {
    $("#deposit1").on('click', function(event) {
    var deposit = parseInt($('#amount1').val());
    total1 = total1 + deposit;
    $("#balance1").html('$' + total1);
   });
    $("#withdraw1").on('click', function(event) {
    // var deposit = parseInt($('#amount1').val());
    var withdraw = parseInt($('#amount1').val());
    newBalance1 = total1 - withdraw;
    $("#withdraw1").html('$' + total1);
  });
    $("#deposit2").on('click', function(event) {
    var deposit = parseInt($('#amount2').val());
    total2 = total2 + deposit;
    $("#balance2").html('$' + total2);
    });
})

// $(document).ready(function() {
//   $("#amount1").on('keyup', function(event) {
//     amount1 = $(this).val();
//     var newBalance = amount1 + amount1
//     $('#balance1').text(newBalance);

//     console.log(newBalance);
//     console.log(amount1);
    
//   });
//   $("#amount2").on('keyup', function(event) {
//     amount2 = $(this).val();
//     // console.log(amount2);
//   });

// $("#yourname").val(function(i,origText){
//     return "His Royal Highness, King " + origText; 
//     });

// $(document).ready(function() {
//     $("#deposit1").on('click', function(event) {
//     var newBalance =
//     $("#balance1").text(newBalance + amount1);
//   });
  //   $("#deposit2").on('click', function(event) {
  //   $("#balance2").text(parseInt($('#balance2').text()) + parseInt(amount2));
  // });  


// })

// var newVal = parseFloat('#deposit1') + 1;
// console.log(newVal);

// function increment() {
//     $('amount1').val( function(i, amount1) {
//         return ++balance1;
//     });
// }



// $(document).ready(function() {
//  $('#amount1').on('keyup', function(event) {
//    amount1 = $(this).val();
//    console.log(amount1);
//  });

//  })

// .val

// event listeners on buttons

// input boxes - .val will get you the value of the input box
// .text will get you the value of the text on the page
// .html 

// get one part working first

