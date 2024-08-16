function isPalindrome(word) {
    word = word.toLowerCase().replace(/\s/g, '');
    
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPalindrome('radar'));
  console.log(isPalindrome('hello'));  
  console.log(isPalindrome('level')); 
  console.log(isPalindrome('A man a plan a canal Panama'));  
  