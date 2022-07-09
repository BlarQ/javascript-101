const ntells = "50years"
document.write(ntells)

// const mo = 8;
// const no = 7;
// console.log(mo + no);
// console.log(mo * no);

// if (no === 3) {
//     console.log(true)
// } else {
//     console.log(false5);
// }

// const car = {
//     color: "red",
//     model: "honda",
//     wheel: "four",
//     year: 2005,
//     new: "false",
//     seat: "4 seats",
//     tinted: "true"
// };
// //hoe to add to existing parameters
// car.hp = true;

// console.log(car)

// //how to remove from the list of parameters
// delete car.model;

// console.log


// let add = 4 + 2;
// let sub = 8 - 4;
// let div = 5 / 15;
// let mul = 5 * 3;
// let exp = 2 ** 5;
// let mod = 6 % 4;

// console.log(add);
// console.log(sub);
// console.log(div);
// console.log(mul);
// console.log(exp);
// console.log(mod);


// let goods1 = 100;
// let goods2 = 200;
// let goods3 = 300 * 2;

// let total = goods1 + goods2 + goods3

// let ave = total / 3

// console.log(ave)
// console.log(total)
// console.log(goods1 <= goods2 )
// let x = 7
// x =- 3

// console.log(x)

// let a = 1;
// let b = "45";

// console.log(a + b);

//comparism operator
// < >
// <= >=

//comparism
// let mango = 450;
// let apple = 300;
// let banana = 200 * 2;

// let goods1 = 500;
// let goods2 = 1000;
// let goods3 = 3000 * 2;

// let total1 = mango + apple + banana;
// let total2 = goods1 + goods2 + goods3;

// console.log(total1)
// console.log(total2)
// console.log(total1 > total2);
// console.log(total1 < total2);
// console.log(total1 >= total2);
// console.log(total1 <= total2);

//other aspect of comparism
//== equalto
//===strictly equal to
//!= not equalto
//!==strictly not to

// let mcfai = "boy"
// if (mcfai === "boy") {
//     alert("congrats");
// }else{
//     alert(wrong);
// }

// if (mcfai !== "bovi") {
//     alert("congrats");
// }else{
//     alert("wrong") ;
// }

//Logical

//&&=AND - ALL THE VARIABLES MUST BE PRESENT
//!!=OR - ATLEAST ONE OF THE VARIABLE
//!=NOT - +OPPOSITE OF THE VARIABLE

//EXAMPLES
// let goods1 = 500;
// let goods2 = 1000;
// let goods3 = 3000 * 2;

// if (price1 > 10000 ||price2 > 100 ||price > 10000) {
//     alert("congrats");
// }else{
//     alert("wrong") ;
// }

// let damola = {
//     laptop: true,
//     phone: true,
//     complexion: "dark",
//     tall: true,
//     age: 50,
// };
// if (damola.laptop === false || damola.complexion === "dark") {
//     console.log("yes");
// }else{
//     console.log("no");
// }    


// console.log(damola)

//ASSIGNMENT
// 1. log all even number from 1 - 1000
// for (i = 0; i <= 1000;i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }
//odd number
// for (i = 0; i <= 1000;i++) {
//     if (i % 2 === 1) {
//         console.log(i)
//     }
// }
// 2. log a table containing multiplication
// lets start with the tables that many of us had to memorize in school. 
// can you log a table that contains all the answers to the multiplication table from 1 to 10

// for (a = 0; a <= 10; a++)
//   for (b = 0; b <= 10; b++) {
//     console.log(a * b);
//   }
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
// the number of characters \

let vowels = ["a","e","i","o","u"]
let alph = ("a","b","c","d","e","f","g","h","i","j","k")
let count = 0

if (alph.includes(vowels)) {
    count++
}



// let mult = "x ";
// for (var a = 0; b < 11; a++) {
//     for (b = 0; a < 11; b++) {
//         if (a == 0 && b > 0) {
//             mult += "[" + b +"]";
//         } else if (b == 0 && a > 0) {
//             mult += "[" + a + "]";
//         } else if (a > 0 && b > 0) {
//             mult += (a * b) + " ";
//         }
//     }
//     mult += "/n"
// }

// console.log(mult);