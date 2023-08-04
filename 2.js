function mean(a, b) {
  const arithmeticMean = (a + b) / 2;
  const geometricMean = Math.sqrt(a * b);
  return [arithmeticMean, geometricMean];
}

console.log(mean(12, 48));