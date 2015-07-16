'use strict';

var line = function(deli) {
  // your code here
  var i, result, number;

  if (deli.length === 0) {
    result = "The line is currently empty.";
  }
  else {
    result = "The line is currently: "

    for (i = 0; i < deli.length-1; i++) {
      number = i+1
      result += number + '. ' + deli[i] + ', ';
    }
    number = deli.length;
    result += number + '. ' + deli[deli.length-1];
  }
  console.log(result);
  return result;
};
