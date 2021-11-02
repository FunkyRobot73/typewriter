let arrayPop = [];
const logger = function(sentence, start) {
  let array = sentence.split("")  //turn string into array
    if(start == sentence.length * 50) { // 500
      return "The End" // Ends Loop
    } else {
arrayPop = array.pop()
return sentence 
    }
    logger()
  console.log(arrayPop);
  console.log(array);
}


console.log(logger("lighthouse"));