//event handlers
$(document).ready(function() {
  var guesses = 3;
  var winningTile = Math.floor((Math.random() * 9) + 1);
  console.log(winningTile);

  var gameState = {
    'gameWon': "You Win.",
    'gameEnded': "Game Over.",
    'gameRunning': "Click to find the treasure."
  };

  currentGameState = 'gameRunning';

  console.log(currentGameState);

  $('.tile').on('click', function(event) {
    var $tile = $(this);
    $('strong').text(--guesses);
    $tile.addClass('red');

    if (winCheck($tile)) {
      $tile.addClass('green');
      gameStateChange();
    }

    if (IsGameOver($tile)) {
      gameStateChange();
    }

  });

  var IsGameOver = function($clicked) {
    if (guesses === 0) {
      return currentGameState = gameState.gameEnded;
    }
  }

  var winCheck = function($clickedTile) {
    if ($clickedTile.data("id") === winningTile) {
      return currentGameState = gameState.gameWon;
    }
  }

  var gameStateChange =function() {
    $('#title').text(currentGameState);
  }

})
