const rotate = function(nums, k) {
    
    for(let i = 0; i < k; i++) {
      nums.unshift(nums.pop()) //unshift adds items to beginning of array, pop removes item from end of array.
    
    }
    return nums.toString().split(",").join(" & "); 
    //method to return string and remove commas and add '&' symbol
    //can also use replace(/,/g, " & ") to do same thing
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)) //output 5 & 6 & 7 & 1 & 2 & 3 & 4

//rotate items in an array 