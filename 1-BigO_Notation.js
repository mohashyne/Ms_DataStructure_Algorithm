// Big O Notation
// Big O Notation is a tool used to describe the time complexity of algorithms. It calculates the time taken to run an algorithm as the input grows. In other words, it calculates the worst-case time complexity of an algorithm. Big O Notation in Data Structure describes the upper bound of an algorithm's runtime.

/*An logrithm is the inverse of exponensiation

Whats is Log

log2  8 = 3

log2 (value) = exponent =========>  2 exponent = value
  */

/*Recursion has to do with space complexity not time */

function addUpTo(n){
  let total = 0;
  for(let i = 0; i <= n; i++){
    total += i;
  }
  return total;
}


let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 -t1) / 1000 } seconds`);


function addUpFast(fn){
return fn * (fn + 1) / 2;
}

  // Explained
  // 6 * (6 + 1)/2

let t3 = performance.now();
addUpFast(1000000000);
let t4 = performance.now();
console.log(`Time Elapsed: ${(t3 -t4) / 1000 } seconds`);
  
  // The addUpFast function takes a single parameter num, which is assumed to be a positive integer. The function then calculates the sum of all the numbers from 1 to num, inclusive, using a formula based on the arithmetic series.
  
  // The formula used in the function is:
  
  // num * (num + 1) / 2
  
  // This formula calculates the sum of an arithmetic series from 1 to num. It works by taking advantage of the fact that the sum of the numbers from 1 to n is equal to n times the average of the first and last numbers. In this case, the first number is 1 and the last number is num, so the average is (1 + num) / 2. Multiplying this by num gives the sum of the arithmetic series.
  
  // For example, if num is 5, the function calculates the sum of the numbers from 1 to 5 as:
  
  // 5 * (5 + 1) / 2 = 5 * 6 / 2 = 15
  
  // This is the sum of the numbers 1, 2, 3, 4, and 5.
  
  // The addUpFast function is a simple and efficient way to calculate the sum of a large number of consecutive integers, as it does not require iterating through each number in the sequence. Instead, it uses a mathematical formula to directly calculate the sum in constant time./*
  
   // If you want to calculate the sum of a different range, just change the number in the parentheses.