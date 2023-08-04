function invertTime(H, M, S) {
  const secondsInHour = 60 * 60;
  const secondsInMinute = 60;

  return secondsInHour * H + secondsInMinute * M + S;
}

console.log(invertTime(0, 6, 40));