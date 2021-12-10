const sub = (operation, numbers) => {
  if (operation === "sub") {
    let result = numbers.reduce((acc, el) => {
      return acc - el;
    });
    console.log(result);
    return true;
  }
  return null;
  // console.log("sub");
};

module.exports = sub;
