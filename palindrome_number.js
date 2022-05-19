/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
  
let myFunc = num => Number(num);

let r = 0,i = 0,y = x, m = 1;
var intArr = Array.from(String(y), myFunc);
  if (x < 0) {
            return false;
  }
  while(i < Math.trunc(String(y).length/2)) {
      m = m * 10;
      r = r * 10 + x % 10;
      x /= 10;
      x = Math.trunc(x);
      i = i+1; 
  }
    if(String(y).length % 2 != 0) {m = m * 10;}
    let s = Math.trunc(y/m);
    return r == s;
};
