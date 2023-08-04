function numberOfRoots(A, B, C) {
  const discriminant = B ** 2 - 4 * A * C;
  if (discriminant > 0) {
    return 2;
  } else if (discriminant === 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(numberOfRoots(1, -6, 9));