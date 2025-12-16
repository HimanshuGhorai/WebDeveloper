// var let and const }for the variable decleration key word;

// var variablekey = "this is var";

// console.log(variablekey);

// decleration and initialization

// var a; //initialization
// var name = "himu"; // initialization and declaraton both;

// // hosting

// console.log(a);
// var a = 12;

// console.log(b);
// let b = 23;

// console.log(c);
// const c = 33;

// typeof all datatype :----

// prmitive datatype and non prmitive data type ;

// prmitive data type is : string,number,boolean,null,symbol,bigint;'
// string
// let stringName = "himanshu";
// console.log(stringName);

// not prmitive data type is: array,objects,function,

// --------- Operator----------

// Arithmetic Operator EX:- adding,substraction,multiplication,divison,modulo,exponentiation,and increases/decreases operator;

// adding

// let x = 10;
// let y = 2;
// console.log("x = ", x);
// console.log("y = ", y);
// let z = x + y; // this is adding
// console.log("adding", z);
// z = x - y;
// console.log("subtraction", z);
// z = x * y;
// console.log("multipliction", z);
// z = x / y;
// console.log("divison", z);
// z = x % y;
// console.log("modulo", z);
// z = x ** y;
// console.log("exponentiation", z);
// z = x++;
// console.log("increment :postfix", z);
// z = ++x;
// console.log("increment :prefix", z);
// z = --y;
// console.log("prefix : dicrement", z);
// z = y--;
// console.log("postfix :dicrement", z);

//assignment operator :- assign valu to variable; and basic operator si  = ; we are using combined and use like this let n += 5; it mins that  let n = n + 5;
// let a = 0;
// a += 5;
// console.log(a);

// comparison
// Return true or false.

// == equality (loose) — converts types if needed.
// 5 == "5" // true

// === strict equality — no type conversion, recommended.
// 5 === "5" // false

// != and !== not equal (loose and strict)

// <, >, <=, >= (less/greater than)

// > example: 10 > 7 // true

// Pitfall: prefer === and !== to avoid unexpected type coercion.

// Special case: NaN (Not-a-Number) is never equal to itself:
// NaN === NaN // false — use Number.isNaN(value) to check.

// 13) Short practice tasks (3)

// What does console.log("5" - 2); print? Why?
// 3
// console.log("5" - 2);

// Write an expression that prints "even" if n is even, otherwise "odd". (Hint: use % and ternary.)
// let n = 4;
// const ruselt = n % 2 === 0 ? "even" : "odd";
// console.log(ruselt);

// Given let score = 0; write let final = score || 10; and let final2 = score ?? 10; — what are final and final2? Why different?

// let score = 0;
// let final = score || 10;
// let final2 = score ? 10;

// this is if condition :-----------------
// let age = 12;
// if (age > 18) {
//   console.log("you are eligible for vote");
// }

// this is the if else condition ;
// let age = 23;
// if (age > 18) {
//   console.log("you can vote");
// } else {
//   console.log("you can not vote");
// }

// let hasID = true;

// if (age >= 18 && hasID) {
//   console.log("Allowed");
// } else {
//   console.log("Not allowed");
// }

// Beginner Level (Easy)
// 1️⃣ Write a program to check if a number is positive or negative.

// let num = 11;

// if (0 < num) {
//   console.log("this nuber is positive");
// } else if (num === 0) {
//   console.log("this number is zero");
// } else {
//   console.log("this number is negative (-)");
// }

// 2️⃣ Write a program to check if a number is even or odd.

// let num = 44;

// if (num % 2 === 0) {
//   console.log(`${num}this number is even `);
// } else {
//   console.log(`${num}this number is odd`);
// }

// 3️⃣ Write a program to check if a person is eligible to vote (age ≥ 18).
// let personAge = 8;

// if (personAge >= 18) {
//   console.log("you are eligible for the vote");
// } else {
//   console.log("you are not eligible for the vote");
// }

// 4️⃣ Write a program to check if a number is greater than 100.

// let num = 222;

// if (num > 100) {
//   console.log("this number is greater than 100");
// } else {
//   console.log("this number is not greater than 100");
// }

// 5️⃣ Write a program to check if a string is empty or not.

// let strings = "";

// if (strings === "") {
//   console.log("this string is empty");
// } else {
//   console.log("this string is not empty");
// }

// Intermediate Level (Medium)

// 6️⃣ Write a program to find the largest of two numbers.

// let num1 = 111;
// let num2 = 111;

// if (num1 > num2) {
//   console.log(`${num1} is largest`);
// } else if (num1 < num2) {
//   console.log(`${num2} is largest`);
// } else {
//   console.log("both are equel");
// }

// 7️⃣ Write a program to find the largest of three numbers.

let num1 = 222;
let num2 = 24;
let num3 = 44;

if (num1 >= num2 && num1 >= num3) {
  console.log(`${num1} is the largest number`);
} else if (num2 >= num1 && num2 >= num3) {
  console.log(`${num2} is the largest number`);
} else {
  console.log(`${num3} is the largest number`);
}

// 8️⃣ Write a program to check if a year is a leap year.

let leepyear = 2024;
if (leepyear % 400 === 0) {
  console.log(leepyear + " is a leap year");
} else if (leepyear % 100 === 0) {
  console.log(leepyear + " is not a leap year");
} else if (leepyear % 4 === 0) {
  console.log(leepyear + " is a leap year");
} else {
  console.log(leepyear + " is not a leap year");
}

// 9️⃣ Write a program to calculate grade based on marks:

// 90+ → A

// 75–89 → B

// 50–74 → C

// Below 50 → Fail

let marks = 103;

if(marks >= 90){
  console.log('grade A')
}else if(marks >= 80){
  console.log('grade B');
  
}else if(marks >= )

// 🔟 Write a program to check if a user can login:

// username is not empty

// password length ≥ 6
