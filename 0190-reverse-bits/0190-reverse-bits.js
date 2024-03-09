/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    
    let numStr = n.toString(2).padStart(32,'0')
    
    acc = 0;
  pow = 1;
  for(let i = 0; i < numStr.length; i++){
      acc += Number.parseInt(numStr[i]) * pow;
      pow *= 2;
  }
  return acc;   
};