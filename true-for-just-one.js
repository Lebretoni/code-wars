// Create a function called one that accepts two params:
// a sequence
// a function
// and returns true only if the function in the params returns true for exactly one item in the sequence.
//ANSWER
function one(arr, fun){
  return arr.filter(fun).length == 1;
}
