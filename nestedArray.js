//function that check the nesting level of array
function getArrayDepth(array) {
  let maxDepth = 1;
  for (const element of array) {
    if (Array.isArray(element)) {
      const depth = 1 + getArrayDepth(element);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }
  }
  return maxDepth;
}
//Function that flatten array
function flattenArray(array) {
  return array.flat(Infinity);
}
