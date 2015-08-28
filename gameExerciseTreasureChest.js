//event handlers
$(document).ready(function() {
  var guesses = 3;
  var winningTile = Math.floor((Math.random() * 9) + 1);
  console.log(winningTile);

  $('.tile').on('click', function(event) {
    var $this = $(this).addClass('red');
    $('strong').text(--guesses);

    winCheck($this);

    if (guesses === 0) {
      $('#title').text("Game Over.");
    } else {
      console.log("Game Running.");
    }
    //if turns = !== 3 and game not won, then continue game.
  });

  var winCheck = function($TileClicked) {
    if ($TileClicked.data("id") === winningTile) {
      guesses === 0;
      $TileClicked.addClass('green');
    }
  }
})
