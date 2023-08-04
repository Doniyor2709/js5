function sign(n) {
  if (n < 0) {
    return -1;
  } else if (n > 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(sign(10));
console.log(sign(-10));
console.log(sign(0)); 