'use strict';

var nowServing = function(deli){
  // your code here
  var result, name;

  if (deli.length === 0) {
    result = "There is nobody waiting to be served!";
  }
  else {
    name = deli.shift();
    result = "Currently serving " + name + ".";
  }
  console.log(result);
  return result;
};
