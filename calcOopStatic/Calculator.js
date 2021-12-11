class Calculator {
  // constructor(operation, numbers) {
  //   this.operation = operation;
  //   this.numbers = numbers;
  // }

  static sum = (operation, numbers) => {
    if (operation === "sum") {
      let result = numbers.reduce((acc, el) => {
        return acc + el;
      }, 0);
      console.log(result);
      return true;
    }
    return null;
  };

  static sub = (operation, numbers) => {
    if (operation === "sub") {
      let result = numbers.reduce((acc, el) => {
        return acc - el;
      });
      console.log(result);
      return true;
    }
    return null;
  };

  static mult = (operation, numbers) => {
    if (operation === "mult") {
      let result = numbers.reduce((acc, el) => {
        return acc * el;
      });
      console.log(result);
      return true;
    }
    return null;
  };

  static div = (operation, numbers) => {
    if (operation === "div") {
      let result = numbers.reduce((acc, el) => {
        return acc / el;
      });
      console.log(result);
      return true;
    }
    return null;
  };

  static actionHandler = (operation, numbers) => {
    switch (operation) {
      case "sum":
        this.sum(operation, numbers);
        break;

      case "sub":
        this.sub(operation, numbers);
        break;

      case "mult":
        this.mult(operation, numbers);
        break;

      case "div":
        this.div(operation, numbers);
        break;

      default:
        console.log("Unknown operation type");
    }
  };

  static init = (operation, numbers) => {
    this.actionHandler(operation, numbers);
  };
}

const [operation, ...numbers] = process.argv.slice(2);
const arrOfNumbers = numbers.map((number) => Number(number));

module.exports = Calculator.init(operation, arrOfNumbers);
