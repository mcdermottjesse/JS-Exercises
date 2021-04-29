
//Given an array of integers nums and an integer target, return indices of the two numbers 
//such that they add up to target.



const twoSum = function(nums, target) {
  let output = []
  
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        output.push(i)
        output.push(j)
        // output.push(nums.indexOf(nums[i]))
        // output.push(nums.indexOf(nums[j]))
      }
    }
  }
    return output
};


console.log(twoSum([3,2,4], 6)) //[1, 2]

console.log(twoSum([2, 7, 11, 15], 9)) //[0, 1]
