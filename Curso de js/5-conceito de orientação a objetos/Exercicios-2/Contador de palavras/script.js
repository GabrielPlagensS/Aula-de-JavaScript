class WordCounter {
  constructor() {
     
  }
  
    countWords(inputString) {
      if (!inputString || typeof inputString !== 'string') {
        return 0;
      }
  
      inputString = inputString.trim();
      if (inputString.length === 0) {
        return 0;
      }

      const wordsArray = inputString.split(/\s+/); 
      return wordsArray.length;
    }
}
  
const wordCounter = new WordCounter();
const inputString = "Esta é uma frase de exemplo para contar palavras.";
const wordCount = wordCounter.countWords(inputString);
console.log("Número de palavras:", wordCount); 
  