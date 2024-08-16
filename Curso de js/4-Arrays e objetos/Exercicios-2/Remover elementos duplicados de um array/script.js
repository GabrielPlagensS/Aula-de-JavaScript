function removeDuplicates(arr) {
    const uniqueObj = {};
    const uniqueArray = [];
  
    for (const item of arr) {
      if (!uniqueObj[item]) {
        uniqueObj[item] = true;
        uniqueArray.push(item);
      }
    }
  
    return uniqueArray;
  }
  
  const arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5];
  const arraySemDuplicatas = removeDuplicates(arrayComDuplicatas);
  console.log(arraySemDuplicatas); 
  