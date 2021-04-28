const moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums.push(nums.splice(nums.indexOf(0), 1)[0]);
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
