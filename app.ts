// function tsadd(n1: number, n2: number, showresult: boolean, phrase: string) {
//   const result = n1 + n2;
//   if (showresult) {
//     console.log(phrase + result);
//   } else {
//     return result;
//   }
// }
// // you could do this way, but not recommended
// // let number1: number;
// // number1 = 5;
// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = "Result is: ";

// tsadd(number1, number2, printResult, resultPhrase);

// How you assign type on Object!!
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Samuel",
//   age: 20,
// };

// console.log(person.name);

// Array
// const person: {
//   name: string;
//   age: number;
//   hobbies: any[];
//   language: string[];
//   role: [number, string];
// } = {
//   name: "samuel",
//   age: 20,
//   hobbies: ["Sports", "cooking", true, 1],
//   language: ["kr", "eng"],
//   role: [2, "author"],
// };
// person.role.push("admin"); // doesn't give you error, it will pass and you will get [2, "author", "admin"]array
// person.role = [0, "admin", "user"]; // It will give you error, becasue you set role only two type.
// person.role[0] = 10;

// const ADMIN = 0;
// const RAD_ONLY = 1;
// const AUTHOR = 2;

//enums with all-uppercase values but that's not a "must-do"/ You can go with Any value names.
// enum Role {
//   ADMIN = 5,
//   READ_ONLY = 100,
//   AUTHOR = "AUTHOR",
// }
// const person = {
//   name: "wonho",
//   age: 20,
//   hobbies: ["sport", "Cooking"],
//   role: 5,
// };
// if (person.role === Role.ADMIN) {
//   console.log("is admin");
// }
// for (const language of person.language) {
//   console.log(person);
// }

// function combine(
//   n1: number | string,
//   n2: number | string,
//   resultConversion: "as-number" | "as-text"
// ) {
//   let result;
//   if (
//     (typeof n1 === "number" && typeof n2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +n1 + +n2;
//     // result = n1 + n2;
//   } else {
//     result = n1.toString() + n2.toString();
//   }
//   //   if (resultConversion === "as-number") {
//   //     return +result;
//   //   } else {
//   //     return result.toString();
//   //   }
//   return result;
// }

// // const addValue1 = combine(30, 26);
// // const addValue2 = combine("max", 26);
// // if you want get result as number
// const getnumber = combine("39", "20", "as-number");
// const getString = combine("30", "20", "as-text");
// console.log(getnumber);
// console.log(getString);

// console.log(addValue1);
// console.log(addValue2);

// function add(n1: number, n2: number) {
//   return n1.toString() + n2.toString();
// }

// void

// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// function printResult(num: number): void {
//   console.log("Result" + num); // it doesn't return anything
// }
// printResult(add(5, 12)); // return Result17
// console.log(printResult(add(5, 12))); //return undefined

// let combineValues: Function; // it will check value is function or not. if you didn't assign, it pass well, but give you error on page.

// // combineValues = add;

// // combineValues = 5;

//unknown

let userInput: unknown;
// let userInput: any;
let userName: string;

userInput = 5;
userInput = "Max";
// you can use if and check your type and change type same as userName

if (typeof userInput === "string") {
  userName = userInput;
}
// userName = userInput; // If you assign unknown to userInput then It will give you error. But if you use let userInput : any it wll work fine.
