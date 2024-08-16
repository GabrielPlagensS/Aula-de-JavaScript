function sumEvenNumbers(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        sum += numbers[i];
      }
    }
  
    return sum;
}
  
console.log(sumEvenNumbers([1, 2, 3, 4, 5])); 
console.log(sumEvenNumbers([10, 20, 30, 40]));
console.log(sumEvenNumbers([-1, 0, 1, 2, 3]));
console.log(sumEvenNumbers([])); 
