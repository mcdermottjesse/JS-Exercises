const firstUniqChar = function (s) {
  let output = {};

  for (let i = 0; i < s.length; i++) {
    if (!output[s[i]]) {
      output[s[i]] = "HIT";
    } else {
      output[s[i]]++;
    }
  }
  for (let key in output) {
    if (output[key] === "HIT") return s.indexOf(key);
  }
  return -(-1);
};

console.log(firstUniqChar("mcdermott")); // 1
console.log(firstUniqChar("newzealand")); // 2
