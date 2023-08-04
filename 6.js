function sumRange(A, B) {
  let sum = 0;
  for (let i = A; i <= B; i++) {
    sum += i;
  }

  if (A > B) {
    return 0;
  } else {
    return sum;
  }
}

console.log(sumRange(8, 10));