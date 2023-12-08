
// Understanding the problem

/*
E.g
.................................................................
 Write a function which takes two numbers and returns their sum. 
 ................................................................
 
 - can  restate the problem in my own words ?
   using strings or numbers, how to handle remainders
   
 -  What are the inputs that go into the problem?
    what if some argurment are empty or off, like 0, white spaces
    
 - What are the outputs that  should come from the solution to the problem ?
 - can  the  outputs be  determined from the inputs ? in other words, do i have enough information to solve the problem ? 9You may not be able to answer this question until you  set about solving the problem)
 - How can i label the important pieces of data that are a part  of the problem. 
*/



/*
UNDERSTAND THE PROBLEM
Can I restate the problem in my own words?
What are the inputs that go into the problem?
What are the outputs that should come from the solution to the problem?
Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
How should I label the important pieces of data that are a part of the problem?

EXPLORE EXAMPLES
Start with Simple Examples
Progress to More Complex Examples
Explore Examples with Empty Inputs
Explore Examples with Invalid Inputs

.............................................................................
Write a function which takes in a string and returns counts of each character in the string. 
.....................................................................

*/

charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1;, e:1, l:2, o:1}

"my phone number is 123456" // do we want to account for spaces & are we going to consider numbers.
"Hello hi" // do we ignore casing(uppercase or lowercase)
charCount(""); // empty strings, null or invalid

