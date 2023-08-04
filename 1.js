function power(a, n) {
  if (n === 0) {
    return 1;
  } else {
    return a * power(a, n - 1);
  }
}

console.log(power(3, 5));