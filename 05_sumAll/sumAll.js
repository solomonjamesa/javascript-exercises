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
    let typeOfElement = []; 

    function checkTypeOf(item) {
        typeOfElement.push(typeof(item));
        return typeOfElement;
    };
    let typeResult = argArray.filter(checkTypeOf);

    function checkTypeOfResult(item){
        if( item == "number") {
            return
        } else {
            let sumAll = "ERROR";
            return sumAll;
        };
    };
    let typeComparison = typeOfElement.filter(checkTypeOfResult);

    function checkPositiveInt(item){
        if (item > 0) {
            return
        } else {
            return item;
        }
    };
    let negNumTest = argArray.filter(checkPositiveInt);
    
    if (negNumTest != []){
        let sumAll = "ERROR";
        console.log(sumAll);
        return sumAll;

    };
    



};

// Do not edit below this line
module.exports = sumAll;
