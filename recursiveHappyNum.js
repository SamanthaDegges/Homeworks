var arrayToAdd = [];

function isSq(Num) {
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
    } else {
      arrayToAdd = [];
      return isSq(sumOfSq);
    }
    console.log('false');
    return false;
};

isSq(33);
// I NEED TO CONVERT THE OUTPUT ARRAY INTO A DIFF DATATYPE
