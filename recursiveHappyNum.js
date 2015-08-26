var array = [];

function isSq(Num) {
  var Num = Num.toString();
  for (i = 0; i < Num.length; i++ ) {
    //console.log(Num[i]);
    var sq = Math.pow(Num[i], 2);
    array.push(sq);
    }
    console.log(array);

    var sumOfSq = array.reduce(function(a, b) {
      return a + b;
    });
    console.log(sumOfSq);
};

isSq(17);
