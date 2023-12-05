

// O(N)
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(1)    


// O(1)
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
// this is 0(1)  because though matter how N grows , it can't print more than 5.