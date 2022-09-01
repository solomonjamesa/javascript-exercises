// Psuedo Code:
//Create an array using .from(arguments)
//Test for non-number parameters using TypeOf
//Test for nonpositive integers
//Sort the elements from least to greatest
// Define the elements as the bounds for a range and loop through the range using for...of
//Sum all numbers 
//Return the sumOfAllNumbers

const sumAll = function() {
    let argArray =  Array.from(arguments); 
    function checkType(item) {
        typeOfElement = typeof(item)
        return typeOfElement;
    };
    let typeResult = argArray.filter(checkType);
    function checkTypeResult(item){
        if( item == "number") {
            return
        } else {
            let sumAll = "ERROR";
            return sumAll;
        };
    };
    let typeComparison = typeResult.filter(checkTypeResult);
    function checkPositiveInt(item){
        if (item > 0) {
            return
        } else {
            let sumAll = "ERROR"
            return sumAll;
        }
    };
    let negNumTest = typeResult.filter(checkPositiveInt);



};

// Do not edit below this line
module.exports = sumAll;
