const convertToCelsius = function(f) {
  var converted=((f-32)*(5/9)).toFixed(1);
  if((converted+"").split(".")[1]==="0"){
    return +(converted+"").split(".")[0];
  }
  return converted;
};

const convertToFahrenheit = function(c) {
  return ((c*(9/5))+32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
