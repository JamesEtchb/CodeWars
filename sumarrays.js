function sum (numbers) {
    "use strict";
  let sum = 0;
    for (let i = 0; i < numbers.length; i++) { 
      sum += numbers[i]; 
    }
    return sum;
};

// console.log(sum([1,2,4,5,6]))