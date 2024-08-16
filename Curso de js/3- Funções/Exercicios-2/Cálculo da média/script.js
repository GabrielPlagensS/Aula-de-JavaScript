function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
  
    const average = sum / numbers.length;
  
    return average;
}
console.log(calculateAverage([1, 2, 3, 4, 5]));  
console.log(calculateAverage([10, 20, 30]));  
console.log(calculateAverage([-1, 0, 1]));  
console.log(calculateAverage([]));

  