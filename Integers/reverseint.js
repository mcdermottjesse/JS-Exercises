const reverse = function(x) {
 
let reverseInt = x.toString().split('').reverse().join('')
 
return Math.sign(x) * parseInt(reverseInt)
    
    
};

console.log(reverse(123))
console.log(reverse(-123))