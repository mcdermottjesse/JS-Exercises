const pairs = (n, ar) => {
  let output = 0
  ar.sort()
	for(let i = 0; i < n; i++) {
    if(ar[i] === ar[i + 1]) {
      i++
     output++
  }
    }
    return output
  }

  console.log(pairs(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))