const returnDuplicate = function(nums) {
  let output = [];     
    for(let i = 0; i < nums.length; i ++) {
        if(!output.includes(nums[i])) {
            output.push(nums[i]) 
        }
    }  
    return output
}

console.log(returnDuplicate([4,1,2,1,2])) //4, 1, 2