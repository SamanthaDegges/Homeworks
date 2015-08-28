//event handlers
$(document).ready(function() {
  var guesses = 3;
  var winningTile = Math.floor((Math.random() * 9) + 1);
  console.log(winningTile);

  var gameState = {
    //'gameWon': "You Win.",
    'gameEnded': "Game Over.",
    'gameRunning': "Click to find the treasure."
  };

  currentGameState = 'gameRunning';

  console.log(currentGameState);

  $('.tile').on('click', function(event) {
    var $tile = $(this);
    $('strong').text(--guesses);
    $tile.addClass('red');


    if (IsGameOn($tile)) {
      console.log(currentGameState);
      $('#title').text(currentGameState);
    } //else {
    //  $tile.addClass('red');
    //}
  });

  var IsGameOn = function($clicked) {
    if ($clicked.data('id') === winningTile || guesses === 0) {
      return currentGameState = gameState.gameEnded;
    }
  }

  var winCheck = function($clickedTile) {
    if ($clickedTile.data("id") === winningTile) {
      $tile.addClass('green');
      return currentGameState = gameState.gameWon;
    }
  }

})
