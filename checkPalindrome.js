checkPalindrome = inputString => {
  inputString = inputString.toLowerCase();
  let palindrome;
  let right = inputString.length-1;
  for (var left = 0; left < right; left++) {
    if(inputString.charAt(left) !== inputString.charAt(right)){
      return false
    }
    right--;
  }
  return true;
}

console.log(checkPalindrome('hlbeeykoqqqokyeeblh'));
