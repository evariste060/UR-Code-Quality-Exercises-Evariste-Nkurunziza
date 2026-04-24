function calculateFactorial(n) {
  if (n === 0 || n === 1)  return 1 // Base Case
  return n*calculateFactorial(n-1) // recursive call
}