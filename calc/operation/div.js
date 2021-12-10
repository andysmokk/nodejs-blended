const div = (operation, numbers) => {
  if (operation === "div") {
    let result = numbers.reduce((acc, el) => {
      return acc / el;
    });
    console.log(result);
    return true;
  }
  return null;
  // console.log("div");
};

module.exports = div;
