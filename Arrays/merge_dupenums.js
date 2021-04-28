


const intersect = function(nums1, nums2) {
      const output = []
     for (let i = 0; i < nums2.length; i++) {
       
         if (nums1.includes(nums2[i])) {
           output.push(nums2[i]);
           nums1.splice(nums1.indexOf(nums2[i]), 1)
           //without indexOf output will be [ 9, 4, 9, 4 ] instead of just [ 9, 4 ]
         }
       }
       return output
     };

console.log(intersect([4,9,5], [9,4,9,8,4]))