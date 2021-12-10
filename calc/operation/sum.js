const sum = (operation, numbers) => {
  if (operation === "sum") {
    let result = numbers.reduce((acc, el) => {
      return acc + el;
    }, 0);
    console.log(result);
    return true;
  }
  return null;
  // console.log("sum");
};

module.exports = sum;
