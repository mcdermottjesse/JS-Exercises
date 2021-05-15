const isPalindrome = function (s) {
  s = s.replace(/\s/g, "", ).replace(/,/g, '').replace(/:/g, '').toLowerCase();
  console.log(s)
  let stringReverse = s.split("").reverse().join("");
  console.log(stringReverse)
  return s == stringReverse;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("toot"));
