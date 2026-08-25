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

// 10. Swap the values of two variables.

// let a = 9;
// let b = 90;

// console.log(a);
// console.log(b);

// [a,b] = [b,a]

// console.log(a);
// console.log(b);



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



// 2. Write a program to calculate the area of a rectangle.

// let I = 20 ;
// let W = 20;

// let A = I * W;

// console.log(A);



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

// let num1 = 222;
// let num2 = 24;
// let num3 = 44;

// if (num1 >= num2 && num1 >= num3) {
//   console.log(`${num1} is the largest number`);
// } else if (num2 >= num1 && num2 >= num3) {
//   console.log(`${num2} is the largest number`);
// } else {
//   console.log(`${num3} is the largest number`);
// }

// 8️⃣ Write a program to check if a year is a leap year.

// let leepyear = 2024;
// if (leepyear % 400 === 0) {
//   console.log(leepyear + " is a leap year");
// } else if (leepyear % 100 === 0) {
//   console.log(leepyear + " is not a leap year");
// } else if (leepyear % 4 === 0) {
//   console.log(leepyear + " is a leap year");
// } else {
//   console.log(leepyear + " is not a leap year");
// }

// 9️⃣ Write a program to calculate grade based on marks:

// 90+ → A

// 75–89 → B

// 50–74 → C

// Below 50 → Fail

// let marks = 3;

// if (marks >= 90) {
//   console.log("grade A");
// } else if (marks >= 75) {
//   console.log("grade B");
// } else if (marks >= 50) {
//   console.log("grade C");
// } else {
//   console.log("Fail");
// }

// 🔟 Write a program to check if a user can login:

// let userName = "";
// let password = "123456";

// if (userName !== "" && password.length >= 6) {
//   console.log("you login");
// } else {
//   console.log("you can't login");
// }

// username is not empty
// password length ≥ 6

// ========= loops ======
// Print numbers 1–10

// for(let i = 0; i <= 10 ; i++){
//   console.log(i);

// }

// Print even numbers from 1–20
// for loop
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let i = 1;

// while(i < 20){
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// Print numbers from 10 down to 1

// for(let i = 10 ; i >= 0; i--){
//   console.log(i);

// }

// let i = 10 ;

// while(i >= 1){
//   console.log(i);
//   i--;

// }

// Print the multiplication table of 5

// let table = 5;

// for (let i = 1; i < 10; i++) {
//   console.log(`${table} X ${i} = ${table * i}`);

// }

// let table = 5;
// let i = 1

// while(i <= 10){
//   console.log(`${table} X ${i} = ${table * i}`);
// i++;
// }

// Find the sum of numbers from 1 to 100
// let num = 100;
// let sum = 0;

// for (let i = 0; i <= num; i++) {
//   sum += i;
// }

// console.log(sum);

// let num = 100;
// let sum = 0;
// let i = 1

// while (i <= num) {
//   sum += i ;
//   i++;
// }

// console.log(sum);

// Count how many numbers from 1–100 are divisible by 3

// for(let i =0; i <= 100; i++){
//   if(i % 3 === 0){
//     console.log(i);

//   }
// }

// let i = 0;
// while (i < 100) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// Print this pattern

// *
// **
// ***
// ****
// *****

// for (let i = 0; i < 5; i++) {

//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// Find the factorial of a number

// let num = 6;
// let fac = 1;

// for (let i = 1; i <= num; i++) {
//   fac = fac * i;

// }
// console.log(fac);

// Print numbers from 1 to 20, but stop when the number reaches 8.

// for (let i = 1; i <= 20; i++) {

//   if(i === 8 ){
//     break
//   }
//     console.log(i);

// }

// Print numbers from 1 to 10, but skip 5.

// for(let i = 1; i<= 10; i++){
//   if(i === 5){
//     continue;
//   }
//   console.log(i);

// }
// for (let i = 1; i <= 10; i++) {

//     if (i === 6) {
//         break;
//     }

//     console.log(i);
// }

// Print numbers from 1 to 20.
// Rules:
// If divisible by 3 → "Fizz"
// If divisible by 5 → "Buzz"
// If divisible by both → "FizzBuzz"
// Otherwise → print the number

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//     continue;
//   }
//   if (i % 3 === 0) {
//     console.log("Fizz");
//     continue;
//   }
//   if (i % 5 === 0) {
//     console.log("Buzz");
//     continue;
//   }

//   console.log(i);
// }

// Use a loop to check numbers from 1 to 20.
// As soon as you find the first even number, print it and stop the loop using break.

// for(let i = 1; i<= 20; i++){
//   if(i % 2 ===0 ){
//   console.log(i);

//     break
//   }
//   console.log(i);

// }

// let number = Number(prompt("Enter your guess number: "));
// let i = 10;

// while (true) {
//   if (i > number) {
//     console.log("guess lower ");
//   } else if (i < number) {
//     console.log("guess higher ");
//   } else {
//     console.log("congratulations");
//     break;
//   }

//   number = Number(prompt("Enter your guess number: "));
// }

// // Sum only even numbers
// let sum = 0

// for(let i = 1 ; i <= 10 ; i ++){
//     if(i % 2 === 0){
//       sum += i
//     }
// }

// console.log(sum);

// =============function ===============

// . Create a function called sayHello that prints "Hello World".
// function sayHello(){
//   console.log(`hello World`);

// }

// sayHello()

// Create a function square(num) that returns the square of a number.
// square(5);
// 25

// function square(num) {
//   return num * num;
// }

// console.log(square(5));

// Create a function add(a, b) that returns the sum.

// add(10, 5);
// // 15

// function add(a,b){
//   return a + b;
// }

// console.log(add(10,5));

// Create a function isEven(num) that returns true if the number is even and false if it's odd.

// isEven(10);
// // true
// isEven(7);
// // false

// function isEven(num) {
//   if (num % 2 === 0) {
//     console.log(`this number is Even`);
//   } else {
//     isOdd(num);
//   }
// }
// function isOdd(num) {
//   if (num % 2 !== 0) {
//     console.log(`this number is odd`);
//   }
// }

// isEven(14);
// isEven(7);
// isEven(8);


// // Challenge: Create a function findLargest(a, b, c) that returns the largest of three numbers.

// function findLargest(a, b, c) {
//   if (a >= b && a >= c) {
//     return a;
//   } else if (b >= a && b >= c) {
//     return b;
//   } else {
//     return c;
//   }
// }

// console.log(findLargest(23, 45, 67));
// console.log(findLargest(23, 67, 45));

// 12. Convert a normal function into an arrow function.
// function greeting(){
//   console.log('hello');
  
// }

// greeting();


// let greeting = () => {
//   console.log('hello');

// }
// greeting();


// let largest = (a,b,c) =>{
//     if(a >= b && a>=c ){
//         return a
        
//     }else if(b>=a && b >= c){
//         return b
//     }else{
//         return c
//     }
// }

// console.log(largest(55,66,88));



// let student1 = "Rahul";
// let student2 = "Amit";
// let student3 = "Ravi";
// let student4 = "Himanshu";

// let student = ['Rahul','Amit','Rive','Himu']
// console.log(student);


// let fruits = ['Apple','Mengo','Bannana','Orange'];
// console.log(fruits);
// console.log(fruits[3]);


// let manga = [];
// console.log(manga);

// const fruits = ['Apple','Mengo','Bannana','Orange'];

// fruits[0] = 'orange'

// console.log(fruits);

// let fruits = ['Apple','Mengo','Bannana','Orange'];

// console.log(fruits.length);

// let fruits = ["Apple", "Mango", "Banana", "Orange"];

// console.log(fruits[fruits.length-1]);

// for(let i = 0; i < fruits.length; i++){
//     // console.log(i);
//     console.log(fruits[i]);
    
// }


// Create an array called colors containing:

// Red
// Blue
// Green
// Yellow
// Black


// let colour = ['Red','Blue','Green','Yellow','black'];
// console.log(colour);


// let fruits = ["Apple", "Mango", "Banana", "Orange"];
// console.log(fruits[0]);
// console.log(fruits[2]);

// let fruits = ["Apple", "Mango", "Banana"];

// fruits[1] = 'origin'

// console.log(fruits);

// console.log(fruits.length);


// let numbers = [10, 20, 30, 40, 50];

// for(let i = 0; i < numbers.length;i++){
//     console.log(numbers[i]);
    
// }



// let fruits = ["Apple", "Mango", "Banana", "Orange"];

// console.log(fruits.length-1);


// 5. How do you find the length of an array?

let arr = [ 12,2,4,445,66,77,99 ]

// console.log(arr);

let lergest = arr[0];

for (let i = 0; i < arr.length; i++) {
    // const element = array[i];
    if(lergest < arr[i]){
        lergest += arr[i]
    }
    
}   

console.log(lergest);

