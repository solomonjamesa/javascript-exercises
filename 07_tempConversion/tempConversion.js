const ftoc = function() {
  let F = arguments[0];
  let celcius = ((F)-32)*(5/9);
  let celciusRounded = celcius.toFixed(1);
  let ftoc = Number(celciusRounded);
  return ftoc;

};

const ctof = function() {
  let C = arguments[0];
  let farenheit = ((C)*(9/5)+32);
  let farenheitRounded = farenheit.toFixed(1);
  let ctof = Math.abs(Number(farenheitRounded));
  return ctof;
  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
