
// function countCharacters(str) {
//   const counts = {};
//   for (let i = 0; i < str.length; i++) {
//     // const char = str.charAt(i);
//     const char = str[i].toLowerCase();
//        if (char === " ") {
//       continue; // skip white space character
//     }
//     else if(counts[char] > 0) {
//       counts[char]++;
//     } else {
//       counts[char] = 1;
//     }
//   }
//   return counts;
// }

// function countCharacters(str) {
//   const counts = {};
//   for (let i = 0; i < str.length; i++) {
//     // const char = str.charAt(i);
//     const char = str[i].toLowerCase();
//        if (char === " ") {
//       continue; // skip white space character
//     }
//     else if(char in counts) {
//       counts[char]++;
//     } else {
//       counts[char] = 1;
//     }
//   }
//   return counts;
// }


// function countCharacters(str) {
//   const counts = {};
//   for (let char of str) {
//     // const char = str.charAt(i);
//     const char = char.toLowerCase();
//        if (char === " ") {
//       continue; // skip white space character
//     }
//     else if(counts[char] > 0) {
//       counts[char]++;
//     } else {
//       counts[char] = 1;
//     }
//   }
//   return counts;
// }

//  refactor 
function countCharacters(str) {
  const counts = {};
  str.toLowerCase().split('').forEach(char => {
    if (/[a-z0-9]/.test(char)) {
      counts[char] = ++counts[char] || 1//(counts[char] || 0) + 1;
    }
  });
  return counts;
}

countCharacters('aaaa')
countCharacters('muhammad')
countCharacters('My phone number is 123456')




