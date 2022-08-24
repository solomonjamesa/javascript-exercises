// Created by solomonJamesa 08/24/2022
//This function returns a repeated string and tests it against different parameters in the repeatString.spec.js file
const repeatString = function(string, num) {  //repeats the string 

    let string1 = string; 

    let newString = '';

    if (num < 0){
        newString = "ERROR";
    }

    for (i = 0; i < num; i++) {
       newString += string1;
    };


    

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
