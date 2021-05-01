function skipInt(c) {
  let output = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i] === 0) {
      if (c[i] === c[i + 1]) {
        output++;
        i++;
      }
    } else {
      output++;
    }
  }
  return output;
}

console.log(skipInt([0, 0, 1, 0, 0, 1, 0])); //4
console.log(skipInt([0, 0, 0, 0, 1, 0])); //3
