const reverseString = function(string) {
    let stringArray = string.split("");
    let arrayReverse = stringArray.reverse();
    let reverseString = arrayReverse.join();
    reverseString = reverseString.replace(/,/g,'');
    return reverseString;
 
};

// Do not edit below this line
module.exports = reverseString;
