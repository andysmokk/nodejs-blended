// console.log("calculator");

// sum+
// sub-
// mult*
// div/

// console.log(process.argv);
// console.log(process.argv.slice(2));
// const [operation, ...numbers] = process.argv.slice(2);
// const arrOfNumbers = numbers.map((number) => Number(number));
// console.log(operation);
// console.log(numbers);
// console.log(arrOfNumbers);

// if (operation === "sum") {
//   let result = arrOfNumbers.reduce((acc, el) => {
//     return acc + el;
//   }, 0);
//   console.log(result);
// }

// if (operation === "sub") {
//   let result = arrOfNumbers.reduce((acc, el) => {
//     return acc - el;
//   });
//   console.log(result);
// }

// if (operation === "mult") {
//   let result = arrOfNumbers.reduce((acc, el) => {
//     return acc * el;
//   });
//   console.log(result);
// }

// if (operation === "div") {
//   let result = arrOfNumbers.reduce((acc, el) => {
//     return acc / el;
//   });
//   console.log(result);
// }

// const sum = (operation, numbers) => {
//   if (operation === "sum") {
//     let result = numbers.reduce((acc, el) => {
//       return acc + el;
//     }, 0);
//     console.log(result);
//     return true;
//   }
//   return null;
// };

// const sub = (operation, numbers) => {
//   if (operation === "sub") {
//     let result = numbers.reduce((acc, el) => {
//       return acc - el;
//     });
//     console.log(result);
//     return true;
//   }
//   return null;
// };

// const mult = (operation, numbers) => {
//   if (operation === "mult") {
//     let result = numbers.reduce((acc, el) => {
//       return acc * el;
//     });
//     console.log(result);
//     return true;
//   }
//   return null;
// };

// const div = (operation, numbers) => {
//   if (operation === "div") {
//     let result = numbers.reduce((acc, el) => {
//       return acc / el;
//     });
//     console.log(result);
//     return true;
//   }
//   return null;
// };

// switch (operation) {
//   case "sum":
//     sum(operation, arrOfNumbers);
//     break;

//   case "sub":
//     sub(operation, arrOfNumbers);
//     break;

//   case "mult":
//     mult(operation, arrOfNumbers);
//     break;

//   case "div":
//     div(operation, arrOfNumbers);
//     break;

//   default:
//     console.log("Unknown operation type");
// }
