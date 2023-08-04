function isPowerN(K, N) {
  if (K <= 0) {
    return false;
  }

  if (K === N) {
    return true;
  }

  while (K % N === 0) {
    K /= N;
  }

  return K === 1;
}

console.log(isPowerN(8, 2));
console.log(isPowerN(16, 2));
console.log(isPowerN(10, 2)); 