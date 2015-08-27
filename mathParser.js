function numberParser(oneString) {
  //console.log(oneString);
  var numbers = oneString.match(/([^\W])/g);
  console.log(numbers);
  var x = numbers.join().split();
  console.log(x);
}

function symbolParser(oneString) {

}



numberParser("3 + 8 * 21-11");
symbolParser("3 + 8 * 21-11");
