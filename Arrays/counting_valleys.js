function countingValleys(steps, path) {
  let output = 0;
  let sum = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      output += 2;
      console.log("I hate hills");
    }
    if (path[i] === "D") {
      output -= 2;
      console.log("Yay downhill we go");
    }
    if (path[i] === "U" && output === 0) {
      sum++;
    }
  }

  return sum;
}

console.log(countingValleys(9, ["U", "D", "D", "D", "U", "D", "U", "U", "U"]));
console.log(countingValleys(12, ["D", "D", "U", "U", "D", "D", "U", "D", "U", "U", "U", "D"]))