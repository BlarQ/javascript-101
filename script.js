// const ageChux = 2078 - 1994;
// const ageNina = 2016 - 3045;
// console.log(ageChux, ageNina);

// console.log(ageChux * 3);

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;

// let markHigherBmi = markBMI > johnBMI;
// console.log(markHigherBmi);

//  Print all even numbers from 0 – 10

// for (i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// operators

// addition
// let a = 4 + 6;

// let sub = 5 - 4;

// let div = 15 / 5;

// let mul = 2 * 5;

// let exp = 2 ** 4;

// let mod = 15 % 4;

// console.log(a);
// console.log(sub);
// console.log(div);
// console.log(mul);
// console.log(exp);
// console.log(mod);

// let price1 = 500;
// let price2 = 1000;
// let price3 = 3000 * 2;

// let mango = 450;
// let apple = 300;
// let banana = 200 * 2;

// console.log(price1 + price2);

// let totPrice = price1 + price2 + price3;

// let ave = totPrice / 3;
// console.log(ave);

// let firstName = "bunmi ";
// let lastName = "pascal";

// console.log(firstName + lastName);

// console.log(price1 <= price2);

// let mcfai = "bovi";

// if (mcfai !== "boy") {
//   alert("congratulations you are correct");
// } else {
//   alert("let me know");
// }

// if (price1 > 10000 && price2 > 100 && price3 > 10) {
//   alert("congratulations you are correct");
// } else {
//   alert("let me know");
// }

let damola = {
  laptop: true,
  phone: true,
  complexion: "dark",
  tall: true,
  age: 50,
};
if (damola.laptop === false || damola.complexion == "dark") {
  console.log("yes");
} else {
  console.log("no");
}

console.log(damola);

// 1 log even numbers from 0 to 1000

for (i = 0; i <= 1000; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

//2. program to generate a multiplication table

// take input from the user
// const number = prompt("enter a number");

// //creating a multiplication table
// for (let i = 1; i <= 10; i++) {
//   // multiply i with number
//   const result = i * number;
//   // display the result
//   console.log(`${number} * ${i} = ${result}`);
// }

//3. return a boolean if a number is divisible by 10

// for (let i = 10; i < 101; i++) {
//   const res = i % 10;

//   if (res === 0) {
//     console.log(true, i);
//   } else {
//     console.log(false, i);
//   }
// }

//4. return the number vowels in this string "a-z"
//
// const words = prompt("enter text");
// const count = () => {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let vowelCount = 0;

//   for (i = 0; i < words.length; i++) {
//     if (vowels.includes(words[i])) {
//       vowelCount++;
//     }
//   }
//   return vowelCount;
// };

// console.log(count());

const ageFunction = () => {
  const age = {
    children: 10,
    teenager: 20,
    adult: 30,
  };

  if (age.children != 10) {
    console.log("access to children");
  } else if (age.teenager <= 20) {
    console.log("access to teenager");
  } else {
    console.log("access to adult");
  }
};

console.log(ageFunction());

//LOOPS

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }

//array.forEach((element) => {});

//while (condition) {}

//do {} while (condition);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const damola of number) {
  console.log(damola);
}

const age = {
  children: 10,
  teenager: 20,
  adult: 30,
};

for (const key in age) {
  console.log(age[key]);
}

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }
