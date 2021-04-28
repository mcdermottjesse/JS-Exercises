


const removeDuplicates = function(nums) {
    
  let output = [];     
    for(let i = 0; i < nums.length; i ++) {
        if(nums[output] != nums[i]) {
            output++
            nums[output] = nums[i]
        }
    }  
    return output; //returns the length of the array without duplicates -> 3
};


// const removeDuplicates = function(nums) {
    
//   let output = [];     
//     for(let i = 0; i < nums.length; i ++) {
//         if(!output.includes(nums[i])) {
//             output.push(nums[i])
//         }
//     }  
//     return output; //returns the array itself without duplicates -> [1,2,3]
// };

console.log(removeDuplicates([1, 1, 2, 3, 3]))
