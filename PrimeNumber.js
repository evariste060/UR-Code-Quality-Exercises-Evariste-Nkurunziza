function isPrime(number) {
  if (number <= 1) return false;   // 0 and 1 are not prime
  if (number === 2) return true;   // 2 is the only even prime
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
}