let sentence = "hello there from lighthouse labs"
let k = sentence.split("")

function map(array, transform) {
  array = array.split("")
  console.log(array);
  let mapped = [];
  for(let element of array) {
    mapped.push(transform(element));

  }
  return mapped
}

console.log(map("hello there from lighthouse labs"));


