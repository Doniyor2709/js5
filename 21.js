function isLeapYear(Y) {
  if (Y % 4 !== 0) {
    return false;
  }

  if (Y % 100 === 0 && Y % 400 !== 0) {
    return false;
  }

  return true;
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2020));
console.log(isLeapYear(2019)); 