/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/

let statement = "I like programming and dogs";
console.log(statement.indexOf('and'));

statement = statement.substring(0, 19);

console.log(statement);

/* EXPECTED OUTPUT 

  "I like programming"
  
*/
