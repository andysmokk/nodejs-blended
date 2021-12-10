const mult = (operation, numbers) => {
  if (operation === "mult") {
    let result = numbers.reduce((acc, el) => {
      return acc * el;
    });
    console.log(result);
    return true;
  }
  return null;
  // console.log("mult");
};

module.exports = mult;
