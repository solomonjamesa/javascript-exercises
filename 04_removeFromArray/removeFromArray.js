
const removeFromArray = function() {
  let argArray = Array.from(arguments);
  let testArray = argArray[0];

  argArray.reverse();
  argArray.pop();
  argArray.reverse();

  let ifErrorArray = 1;
  let isItemIncluded = function(item){
    if (testArray.includes(item)){
      return testArray.includes(item);    
    } else {
      ifErrorArray = 0;
      return ifErrorArray;
    }
  }
  filteredArray = argArray.filter(isItemIncluded);

  while (ifErrorArray == 0){
    let removeFromArray = testArray;
    return removeFromArray;
  };

 
  let i = 0;
  while (ifErrorArray == 1 && i != argArray.length){
    if (argArray.length == 1){

        let index = testArray.indexOf(argArray[0]);
        let removedItem = testArray.splice(index,1); 
        let finalResultArray =function(item){
            if (item != removedItem){
                return true
            };  
            return newFilteredArray;
          };
        let newFilteredArray = testArray.filter(finalResultArray);
        let removeFromArray = newFilteredArray;

        return removeFromArray;

      } else if (argArray.length == 2){

        for(i=0;i<argArray.length;){
        
          let index = testArray.indexOf(argArray[i]);

          let removedItem = testArray.splice(index,1); 

          let finalResultArray =function(item){
              if (item != removedItem){
                  return true
              };
              
              };
          let newFilteredArray=[];    
          newFilteredArray = testArray.filter(finalResultArray); 
          i++;
          if (i != argArray.length){
            continue;
          }else {
            let removeFromArray = newFilteredArray;
            return removeFromArray;
          };

        };  

      } else {
        let removeFromArray = "Logic error";
        return removeFromArray;
      }

  };
 
  
};
// Do not edit below this line
module.exports = removeFromArray;
