const ntells = "50years"
document.write(ntells)

//ASSIGNMENT
// 1. log all even number from 1 - 1000
for (i = 0; i <= 1000;i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
// odd number
for (i = 0; i <= 1000;i++) {
    if (i % 2 === 1) {
        console.log(i)
    }
}
// 2. log a table containing multiplication
// lets start with the tables that many of us had to memorize in school. 
// can you log a table that contains all the answers to the multiplication table from 1 to 10

for (a = 0; a <= 10; a++)
  for (b = 0; b <= 10; b++) {
    console.log(a * b);
  }
// 3. return a boolean if a number is divisible by 10 i.e the inverse Result(damola)
// you'll create a function that give you a "true" or "false" boolean as it output. 
// the inputted number should only return a "true" if it's divisible by 10.

let a = 30
let b = 10
if (a % b === 0) {
    console.log(true) 
} else {
    console.log(false)
}
    
 
// 4. return the number vowels in this string "a-z" 
// create a funtion that will return an integer of a number of vowels found in a String. 
// this is a great way to practise detrmining the the features of a database.
// if youuse JavaScript later in your career, you'll be well prepared to determine what 
// datasets (or just string) consist of. if youfeellike an extra challenge, consider returning 
// the number of characters

//I DO NOT UNDERSTAND THIS PARTICULAR QUESTION