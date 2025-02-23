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
           return item;
        };
    };
    let typeComparison = typeOfElement.filter(checkTypeOfResult);
    if (typeComparison.length != 0){
        let sumAll = "ERROR";
        return sumAll;

    };

    function checkPositiveInt(item){
        if (item > 0) {
            return
        } else {
            return item;
        }
    };
    let negNumTest = argArray.filter(checkPositiveInt);

    if (negNumTest.length != 0){
        let sumAll = "ERROR";
        return sumAll;

    };


    let max = Math.max(...argArray);
    let min = Math.min(...argArray);
    function range(min, max){
        let arrayFromMintoMax = [];
        for (let i = min; i <= max; i++){
            arrayFromMintoMax.push(i);
        }
        return arrayFromMintoMax;
    }
    let arrayFromMintoMax = range(min,max);

    function getSum (arrayFromMintoMax){
        let sumAll = 0;
        for (let i = 0; i < arrayFromMintoMax.length; i++){
            sumAll += arrayFromMintoMax[i];
        }
        return sumAll;
       };
       let sumAll = getSum(arrayFromMintoMax);
       return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
