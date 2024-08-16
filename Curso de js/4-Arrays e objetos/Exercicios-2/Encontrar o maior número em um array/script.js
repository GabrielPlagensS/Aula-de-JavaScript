function findMaxNumber(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    let max = arr[0]; 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max;
  }
  
  const numeros = [10, 5, 8, 25, 3, 15];
  const maiorNumero = findMaxNumber(numeros);
  console.log("O maior número é:", maiorNumero);