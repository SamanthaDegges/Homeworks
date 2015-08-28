//event handlers
$(document).ready(function() {
  var guesses = 3;
  var winningTile = Math.floor((Math.random() * 9) + 1);
  console.log(winningTile);

  var gameState = {
    'gameWon': "You Win.",
    'gameLost': "Game Over.",
    'gameRunning': "Click to find the treasure."
  };

  currentGameState = 'gameRunning';

  console.log(currentGameState);

  $('.tile').on('click', function(event) {
    var $tile = $(this);
    $('strong').text(--guesses);
    $tile.addClass('red');


    if (winCheck($tile)) {
      console.log(currentGameState);
      $('#title').text(currentGameState);
      $tile.addClass('green');
    } //else {
    //  $tile.addClass('red');
    //}
  });



  var winCheck = function($clickedTile) {
    if ($clickedTile.data("id") === winningTile) {
    return currentGameState = gameState.gameWon;
    }
  }

})
