var str = 1234567890;

var parser = function(str){
  str.toString().match(/(.)/).forEach(function(value, index, array) {
      console.log(value);
      str = str.toString().replace(0, value,'(');
      console.log(str);
      //str = str.toString().replace(3,(value,')'));
      //str = str.toString().replace(10,(value,'-'));
    //console.log(str);
    //return str.split(/4/);
  });

}

parser(str);

//shud return: (123)456-7890
