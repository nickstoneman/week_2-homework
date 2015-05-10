var menutItem = [];
var adjectives = ['tasty', 'delicious', 'special', 'extremely rare', 'endangered'];

$(document).ready(function() {
// MAIN JS IN jQuery !!!!
console.log('jQuery works!');

  $('.greeting').on("click", function() {
    console.log("click");
    var output = $(this).attr('id'); 
    var randomAdjective = adjectives[Math.floor(adjectives.length * Math.random())];
    $('ol').append('<li>' + output + randomAdjective + '</li>');
    
  });

});


