var menutItem = [];
var adjectives = ['tasty', 'delicious', 'special', 'extremely rare', 'endangered', 'very tasty', 'house special'];

$(document).ready(function() {
// MAIN JS IN jQuery !!!!
console.log('jQuery works!');




  $('.greeting').on("click", function() {
    console.log("click");
    var output = $(this).attr('id'); 
    var randomAdjective = adjectives[Math.floor(adjectives.length * Math.random())];
    $('ol').append('<li>' + randomAdjective + " " + output + '</li>');
    
  });

// Sounds
$('#ebi').on("click", function(){
    var sushiEbi = soundmanager.createSound({
        url: "audiofiles/two_shrimp_sushi_-_yes.mp3"
        });
    sushiEbi.play();
    })

$('.tamago').on("click", function(){
    var sushiTamago = soundmanager.createSound({
        url: "path to file.mp3"
        });
    sushiTamago.play();
    })

$('.gunkan_maki').on("click", function(){
    var gunkan_maki = soundmanager.createSound({
        url: "path to file.mp3"
        });
    sushiGunkan_maki.play();
    })




});


