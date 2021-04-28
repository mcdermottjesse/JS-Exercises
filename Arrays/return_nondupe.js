const returnNonDupe = function(nums) {
  let output = nums.sort();  
  console.log("Output", output)   
    for(let i = 0; i < nums.length; i++) {
        if(output[i - 1] !== output[i] && output[i + 1] !== output[i]) {
         
         return output[i]
        }
    }  
    
}

console.log(returnNonDupe([6,2,2,3,5,1,1,6,8,5])) //will only return the lowest non duplicate number