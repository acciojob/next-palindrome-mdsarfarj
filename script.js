function nextPalindrome(num) {
  //your JS code here.
	  function isPalindrome(n) {
    return n.toString() === n.toString().split('').reverse().join('');
  }

  // Start checking from the next number
  let nextNum = num + 1;
  while (true) {
    if (isPalindrome(nextNum)) {
      return nextNum;
    }
    nextNum++;
  }
}
 
const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
