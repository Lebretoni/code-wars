//Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.
//ANSWER
function divide(weight){
  //let n = 0
  if (weight == 2) {
  return false
  } else if (weight % 2 ==0) {
    return true
  } else {
    return false
  }
}
