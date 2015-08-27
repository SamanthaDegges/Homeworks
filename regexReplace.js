var name = "John Smith";
name.replace(/(\w+)\s(\w+)/, function(match, c1, c2, index, string){
  console.log(match);
  console.log(c1);
  console.log(c2);
  console.log(index);
  console.log(string);
  //return c2 + ',' + c1;
})
