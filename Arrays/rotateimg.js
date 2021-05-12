
const rotate = (matrix) => {
 
let output = [];

 for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) { 
    output.push(matrix[i][j])
    console.log(matrix[i][j])
  }
}
for (j = matrix.length - 1; j >= 0; j--) {
  for(i = 0; i < matrix.length; i++) {
    
    matrix[i][j] = output.shift()
    
}
}
 return matrix
};


console.log(rotate([
  [1,2,3],
  [4,5,6],
  [7,8,9]
  ]))

  //Output: [[7,4,1],[8,5,2],[9,6,3]]