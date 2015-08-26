

function isSq(Num) {
  if ( Num > 0 ) {
  var arrayToAdd = [];
  var Num = Num.toString();
  for (i = 0; i < Num.length; i++ ) {
    var sq = Math.pow(Num[i], 2);
    arrayToAdd.push(sq);
    }
    var sumOfSq = arrayToAdd.reduce(function(a, b) {
      return a + b;
    });

    if (sumOfSq === 1) {
      console.log("sum of squares = "+ sumOfSq);
      return true;
    } else if (sumOfSq === 4) {
        console.log('false cuz equals 4');
        return false;
    }
    isSq(sumOfSq);
  }
  console.log('Please enter a valid number.');
};

isSq(0);
// I NEED TO CONVERT THE OUTPUT ARRAY INTO A DIFF DATATYPE
