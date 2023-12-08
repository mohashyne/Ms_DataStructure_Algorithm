for(var i = 0; i < 3; i++){
  setTimeout(() =>{
    console.log(i);
  }, 100);
}

/*
BREAK IT DOWN
Explicitly write out the steps you need to take.

This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well. 

*/
// Write a function which takes in a string and returns counts of each character in the string. 

//function charCount(str){
//do something
// return  an object  with keys that are lowercasse alphanumeric  characters in the string: values should be
//}

function charCount(str){
//make object to return at end
// loop over string, for each character.... 
  //if char is number/letter AND is a key in object, add on to count
 //if char is number/letter AND not in objct, add it to object and set value to 1
 //if char is Something else (space, period, etc), don't do anything
// return object at end  
}
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

function countCharacters(str) {
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    // const char = str.charAt(i);
    const char = str[i].toLowerCase();
       if (char === " ") {
      continue; // skip white space character
    }
    else if(char in counts) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
}


countCharacters('aaaa')
countCharacters('muhammad')
countCharacters('My phone number is 123456')

