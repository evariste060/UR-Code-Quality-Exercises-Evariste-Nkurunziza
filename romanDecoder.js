function solution(roman) {
  const romanValues = {
    I: 1, V: 5, X: 10,
    L: 50, C: 100,
    D: 500, M: 1000
  };
  return [...roman].reduce((sum, current, i, arr) => {
    const value = romanValues[current];
    const nextValue = romanValues[arr[i + 1]];

    if (nextValue > value) {
      return sum - value;
    } else {
      return sum + value;
    }
  }, 0);
}