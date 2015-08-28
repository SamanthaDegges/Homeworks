//event handlers
$(document).ready(function() {
  var guesses = 3;

  $('.tile').on('click', function(event) {
    $(this).addClass('red');
    $('strong').text(--guesses);

  if (guesses === 0) {
    $('#title').text("Game Over.");
  } else {
    console.log("Game Running.");
  }
    //if turns = !== 3 and game not won, then continue game.
  });


  var win = function() {
    $(this).addClass('green');
  }

})
