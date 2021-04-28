const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filtered = numbers.filter(function evenNumbers(number) { //filter allows us to filter out the elements in an array
return number % 2 === 0  //here we have declared which numbers to filter, e.g. all numbers that are divisible by 2, 
//which are threfore even.
})
  console.log(filtered);

const numbers1 = [1, -1, 2, 3];

const filtered1 = numbers1.filter(function(value) {
  return value >= 0;
});

console.log(filtered1);