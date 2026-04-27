function isPrime(number) {
  if (number <= 1) return false;   // 0 and 1 are not prime
  if (number === 2) return true;   // 2 is the only even prime
  if (number % 2 === 0) return false; // eliminate even numbers
  for (let divisor = 3; divisor < number; divisor += 2) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(17))