const containsDuplicate = function(nums) {
  let output = {}
    for(let i = 0; i < nums.length; i++) {
      
      if(output[nums[i]]) {
          return true;
        }
        output[nums[i]] = true;
     }  
    return false
    };


    console.log(containsDuplicate([1,2,3,1]))

    /*
    This solution uses a object to store all of the numbers as keys.
    Then it checks to see if a key already exists, if it does then we now know that we have a 
    duplicated value in the array.
    */