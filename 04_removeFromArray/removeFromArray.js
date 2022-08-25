//const removeFromArray = function(array,num) {
    //let newArray = array;
    //let removeFromArray = newArray.splice(num-1,1); 
    //removeFromArray = newArray;
    //return removeFromArray;

const removeFromArray = function() {
   // let newArray = arguments[0];
   // let removeFromArray = newArray.splice(arguments[1]-1,1); 
   // removeFromArray = newArray;
   // return removeFromArray;

  let numberOfParameters = arguments.length;
    //if (numberOfParameters == 0){
        //return removeFromArray = "Error 0 : No arguments detected";

    //} else if (numberOfParameters == 1){
        //return removeFromArray = "Error 1 : Not enough arguments detected";

    //} else if (numberOfParameters == 2){
    if (numberOfParameters == 2){
        let newArray = arguments[0];
        let removeFromArray = newArray.splice(arguments[1]-1,1); 
        removeFromArray = newArray;
        return removeFromArray;

    } else if (numberOfParameters ===3){
        let newArray = arguments[0];
        let removeFromArray = newArray.splice(arguments[1]-1,1); 
        removeFromArray = newArray.splice(arguments[2]-1,1); 
        removeFromArray = newArray;
        return removeFromArray;

    } else{
        let removeFromArray = "Logic Error"
    }
};
// Do not edit below this line
module.exports = removeFromArray;
