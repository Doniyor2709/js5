function sumOddEven(N) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
      sumEven += i;
    } else {
      sumOdd += i;
    }
  }

  return [sumEven, sumOdd];
}

console.log(sumOddEven(10));