function sortDescending(arr) {
    arr.sort(function(a, b) {
      return b - a; 
    });
  
    return arr;
  }
  const numbers = [4, 9, 2, 1, 5, 8];
  const sortedDescending = sortDescending(numbers);
  console.log(sortedDescending);
  