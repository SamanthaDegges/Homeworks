var isSq = function(Num) {
  if ( Num > 0 ) {
    var arrayToAdd = [];
    var Num = Num.toString();
    console.log('Num converted to string is: '+ Num);

    for (i = 0; i < Num.length; i++ ) {
      NumAsNumber = parseInt(Num[i]);
      console.log('Num as a parsedInt is: '+NumAsNumber);
      var sq = Math.pow(Num[i], 2);
      console.log('squared int is: '+sq);
      arrayToAdd.push(Num);
      break;
      //we are pushing a string to array which doesnt work.
    }
    console.log(arrayToAdd);
    var sumOfSq = arrayToAdd.reduce(function(a, b) {
    return a + b;
    });

    if (sumOfSq === 1) {
      console.log('true');
      return true;
    } else if (sumOfSq === 4) {
      console.log('false cuz equals 4');
      return false;
    } else {
      return isSq(sumOfSq);
    }
  }  console.log('Num provided is not greater than 0.');
};

isSq(19);
