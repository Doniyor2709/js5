function factorial(N) {
  if (N < 0) {
    return 1;
  }

  let product = 1;
  for (let i = 1; i <= N; i++) {
    product *= i;
  }

  return product;
}

console.log(factorial(5));
console.log(factorial(-1)); 