function sumUniqueNumbers(arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    const countMap = new Map();
    let sum = 0; 
  
    for (const num of arr) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    for (const num of arr) {
      if (countMap.get(num) === 1) {
        sum += num;
      }
    }
  
    return sum;
  }
  
  const numeros = [1, 2, 3, 2, 4, 5, 1, 6];
  const somaNumerosUnicos = sumUniqueNumbers(numeros);
  console.log("A soma dos números únicos é:", somaNumerosUnicos);