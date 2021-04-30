function reverse(string) {
 
  //string = string.slice(2)
  let reversed = '';
  for (let i = string.length -1; i >= 0; i--) {
   
  reversed += string[i]
    
  if(string[i] === " ") {
   reversed += "\n"
  }
  }
  return reversed
}

console.log(reverse("hello goodbye"));
console.log(reverse("1 fish 2 fish"));






