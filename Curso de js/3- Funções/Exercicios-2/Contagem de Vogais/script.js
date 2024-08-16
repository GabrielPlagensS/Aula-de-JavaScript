function countVowels(string) {
    string = string.toLowerCase();

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;
  
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        count++;
      }
    }
  
    return count;
}  

console.log(countVowels('Hello'));  
console.log(countVowels('OpenAI'));  
console.log(countVowels('JavaScript'));  
console.log(countVowels(''));  
