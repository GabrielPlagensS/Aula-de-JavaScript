function reverseString(string) {

    const reversed = string.split('').reverse().join('');
  
    return reversed;
}
  
console.log(reverseString('Hello'));  
console.log(reverseString('OpenAI')); 
console.log(reverseString('12345'));  
console.log(reverseString(''));  
