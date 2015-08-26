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

    var x = arrayToAdd;

    if (sumOfSq === 1) {
      console.log("sum of squares = "+ sumOfSq);
      return true;
    } else {
      arrayToAdd = [];
      console.log(sumOfSq);
      isSq(55);
    }
//    };


};

isSq(19);
// I NEED TO CONVERT THE OUTPUT ARRAY INTO A DIFF DATATYPE
