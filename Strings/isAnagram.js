const isAnagram = (s, t) => {
if(s.length != t.length) {
  return false
}

s = s.split("").sort().join("")
t = t.split("").sort().join("")

console.log(s, t)
if(s === t) {
  return true
}
else {
  return false
}
};

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("rat", "car")); //false
console.log(isAnagram("two", "three")); //false