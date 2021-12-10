class Calculator {
  sum = (operation, numbers) => {
    if (operation === "sum") {
      let result = numbers.reduce((acc, el) => {
        return acc + el;
      }, 0);
      console.log(result);
      return true;
    }
    return null;
  };

  sub = (operation, numbers) => {
    if (operation === "sub") {
      let result = numbers.reduce((acc, el) => {
        return acc - el;
      });
      console.log(result);
      return true;
    }
    return null;
  };

  mult = (operation, numbers) => {
    if (operation === "mult") {
      let result = numbers.reduce((acc, el) => {
        return acc * el;
      });
      console.log(result);
      return true;
    }
    return null;
  };

  div = (operation, numbers) => {
    if (operation === "div") {
      let result = numbers.reduce((acc, el) => {
        return acc / el;
      });
      console.log(result);
      return true;
    }
    return null;
  };

  actionHandler = (operation, numbers) => {
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
}

module.exports = Calculator;
