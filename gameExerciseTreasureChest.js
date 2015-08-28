//event handlers
$(document).ready(function() {
  var guesses = 0;

  $('.tile').on('click', function(event) {
    //initiate count

  //return turns and if turns = 3 then game lost.
  //if turns = !== 3 and game not won, then continue game.
    $(this).addClass('red');
    console.log(turnsRemaining());
  });


  var win = function() {
    $(this).addClass('green');
  }

  var turnsRemaining = function(){ //do i need event or to stop propogate here?
    return guesses = guesses + 1;
  }

})
