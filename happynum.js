//this functino has to take 2 and three and 1 digit numbers.
var isHappy = function(Num) {
  var NumToString = Num.toString();


  for (var i = 0; i < NumToString.length; i++) {
    //var lengthOfNumString = stringOfNum.length;
    //console.log('i is:' + i);
    var digit = NumToString[i];
    var squaredDigit = Math.pow(digit, 2);

    console.log('squared is: '+squaredDigit);
    sumOfSquared = squaredDigit;
    console.log(sumOfSquared);
  }


  //sq each
  //add
  //when equal 1; return happy number
  //var x = Math.pow(digit,2);
  //console.log(digit, x);
};

isHappy(17);
