function emailParser(strings) {
  var strings = strings;
  var x = strings.match(/\w+@\w+\.(\w+)\.?(\w+)?/gmi);
  console.log(x);
}

//emailParser("anam778e@example.com, samantha@gmail.com, t2est@hotmail.com");
emailParser('Strings are useful me@place.com for holding data that mr.dude@tubular.com can be represented in text form. Some of the most-used senor.taco@enchiladas.co.kr operations on strings are to check their length, to build and concatenate.');
