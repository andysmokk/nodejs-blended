const actionHandler = require("./actionHandler");

const [operation, ...numbers] = process.argv.slice(2);
const arrOfNumbers = numbers.map((number) => Number(number));

actionHandler(operation, arrOfNumbers);

console.log("¿Hola Mundo?");
