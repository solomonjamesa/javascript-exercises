//Create a function that determines whether
//a given year is a leap year or not
//If a year is divisble by 4 return True
//If a year is divisble by 100 return False
//If a year is divisble by 400 return True
const leapYears = function() {
    let year = arguments;
    let leapYear = year[0]%4;
    let fourCentury = year[0]%400;
    let century = year[0]%100;

    if (leapYear == 0 && fourCentury != 0 && century == 0){
        let leapYears = false;
        return leapYears;

    }else if (leapYear == 0 && fourCentury == 0){
        let leapYears = true;
        return leapYears;

    }else if (leapYear == 0 && fourCentury != 0 ){
        let leapYears = true;
        return leapYears;
    }else {
        let leapYears = false;
        return leapYears;
    }

};

// Do not edit below this line
module.exports = leapYears;
