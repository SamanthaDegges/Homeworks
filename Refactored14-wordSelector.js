function name(sentence) {
  var wordsWithRepeats = [];
  var words = sentence.split(' '); //split into words
  return words.forEach(function(element, index, array) { //filters words
    var letters = element.split(''); //turns each word into letters
    return letters.forEach(function(element, index, array) {
      var array = array.join('');
      var letterRegExp = new RegExp(element, 'gi');
      var matches = (array.match(letterRegExp)).length;
      if (matches > 1) {
        var wordToCheckFor = new RegExp(element, 'gi');
        var objectsStr = wordsWithRepeats.join();

        var dupes = objectsStr.match(wordToCheckFor);
        if (dupes === null) {

          wordsWithRepeats.push({array: matches});
          console.log('array is: ', wordsWithRepeats);
          wordsWithRepeats.forEach(function(elem, i) {
            console.log(elem);
          });
        }
      }
    });
  });
}

name("I attribute test loon long longg super super did uper");
