function calculateFactorial(number) {
  if (number === 0 || number === 1)  return 1// Base Case
  return number*calculateFactorial(number-1) // recursive call
}