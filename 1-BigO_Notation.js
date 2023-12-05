// Big O is : So big-O is just a way of formalized fuzzy counting,

// It allows us to talk in a very formal way about how the runtime of an algorithm grows as the inputs grows. It's a way of describing the relationship between the input to a function or as it grows and how that changes the runtime of that function.
//   The relationship between the input size
// and then the time relative to that input.



// We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
  
       
// *    f(n) could be linear (f(n) = n) 
// * f(n) could be quadratic (f(n) = n2)
// *   f(n) could be constant (f(n) = 1)
// *   f(n) could be something entirely different!

// ￼

// ￼

// ￼
// // this prints in pairs
// function printAllPairs (n) {
//   for (let i = 0; i < n; i++) {
//     for (let j  = 0; j < n; j++){
//       console.log(i, j);
//     }
//   }
// }

// printAllPairs(5)


// EXAMPLE 1  
function addUpTo(n) {
  return n * (n + 1) / 2;
}
// Always 3 operations

// O(1)



// EXAMPLE 2
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Number of operations is (eventually) bounded by a multiple of n (say, 10n)

// O(n)


// EXAMPLE 3 

function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}

countUpAndDown(2)

// Number of operations is (eventually) bounded by a multiple of n (say, 10n)

// O(n)Number of operations is (eventually) bounded by a multiple of n (say, 10n)

// O(n)


// EXAMPLE 4 (here we have 2 o(n) thats N2)
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// O(n) operation inside of an O(n) operation.

// O(n * n)

// O(n 2 )