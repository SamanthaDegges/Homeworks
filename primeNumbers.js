//Write a function getPrimes that will accept one number as a parameter.  The function will return an array of all of the prime numbers up to that number.

function isPrime(Num) {
  if ( Num > 1 && Num % 2 !== 0) {
    for (var i = 3; i <= Num.valueOf; i++) {
      while (Num % i !== 0) {
        console.log('it\'s prime so far!');
      }
    }
    console.log('Number is greater than 0 and odd.');

  } console.log('nope.');
  return false;
}

isPrime(5);


//Test Cases:

//console.log( getPrimes(15) );   // -> [2, 3, 5, 7, 11, 13]
//console.log( getPrimes(41) );   // -> [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]
