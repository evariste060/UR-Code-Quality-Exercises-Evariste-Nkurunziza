function calculateMatrixSum(matrix) {
    let sumsArray = matrix.map(numbers=>numbers.reduce((sum,number)=>sum+number,0))
    let sum = sumsArray.reduce((sum,element)=>sum+element,0)
  return sum;
}