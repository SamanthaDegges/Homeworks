var guess = 'r';

var selectedword = selectedword.replace(/_/g, function(match, index)) {
  if (solution[index]=== guess){
    return guess;
  } else {
    return match;
  }
});
