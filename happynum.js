//this functino has to take 2 and three and 1 digit numbers.
var isHappy = function(Num) {
  var NumToString = Num.toString();


  for (var i = 0; i < NumToString.length; i++) {
    //var lengthOfNumString = stringOfNum.length;
    //console.log('i is:' + i);
    var digit = NumToString[i];
  //  var digitB = NumToString[i+1];

    var squaredDigit = Math.pow(digit, 2);
  }
  var test = isHappy(NumToString[i+1]);
  console.log(test);
  //var sumofSquared = squaredDigit;
};

isHappy(17);
