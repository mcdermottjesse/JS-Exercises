const longestCommonPrefix = function (strs) {
  let emptyArr = "";
  if (strs === null || strs.length === 0) {
    return emptyArr;
  }
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return emptyArr;
      }
    }

    emptyArr = emptyArr + strs[0][i];
  }
  return emptyArr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); //fl

console.log(longestCommonPrefix(["dog", "racecar", "car"])); //""

console.log(longestCommonPrefix(["green", "grid", "grape"])); //gr

console.log(longestCommonPrefix([""])); //""
