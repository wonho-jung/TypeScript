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
const person: {
  name: string;
  age: number;
  hobbies: any[];
  language: string[];
} = {
  name: "samuel",
  age: 20,
  hobbies: ["Sports", "cooking", true, 1],
  language: ["kr", "eng"],
};

for (const language of person.language) {
  console.log(language.toUpperCase());
}
