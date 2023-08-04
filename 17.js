function getSum3(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(getSum3(15)); 