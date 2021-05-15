const isPalindrome = function (s) {
  s = s.replace(/\s/g, "").toLowerCase();

  let stringReverse = s.split("").reverse().join("");

  return s == stringReverse;
};

console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("toot"));
