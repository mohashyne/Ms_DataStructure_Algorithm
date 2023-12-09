/* 
Big 0 of Objects
-Insertion - O(1)
-Removal - O(1)
-Searching - O(N)
-Access - 0(1)
When you don't need any ordering, objects are an excellent choice!
*/

let instructor = {
  firstName: "Muhammad",
  isInstructor: true,
  favoriteNumbers: [1,2,3,4]
}

Object.keys(instructor);
Object.entries(instructor);
instructor.hasOwnProperty("firstName");

/* 
Big 0 of Object Methods
Object.keys - O(N)
Object.values - O(N)
Object.entries - O(N)
hasOwnProperty - O(1)
*/