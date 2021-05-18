const validMountainArray = function (arr) {
  let peak;

  if (arr.length < 3) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i]) {
      return false;
    }

    if (!peak && arr[i] > arr[i + 1]) {
      peak = arr[i];
    }

    if (peak && arr[i] < arr[i + 1]) {
      return false;
    }
    if (peak && arr[i] > peak) {
      return false;
    }
  }

  return peak !== undefined && peak !== arr[0];
};

console.log(validMountainArray([2, 1])); //false

console.log(validMountainArray([3, 5, 5])); //false

console.log(validMountainArray([0, 3, 2, 1])); //true

console.log(validMountainArray([1, 2, 4, 0])); //true

console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); //false

console.log(validMountainArray([0, 2, 3, 3, 5, 2, 1, 0])); //false

console.log(validMountainArray([2, 0, 2])); //false

console.log(validMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); //false
