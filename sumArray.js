export function sumArray(array, index = 0) {
    //base Case
  if (index === array.length) {
    return 0;
  }
  //recursive call
  return array[index] + sumArray(array, index + 1);
}