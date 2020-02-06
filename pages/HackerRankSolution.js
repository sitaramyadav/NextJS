function diagonalDifference(arr) {
  // Write your code here
  let diagonal1 = 0,
    diagonal2 = 0;

  for (let row = 0; row < arr.length; row++) {
    diagonal1 += arr[row][row];
    diagonal2 += arr[row][arr.length - row - 1];
  }
  console.log(diagonal1 + ", " + diagonal2);
  return Math.abs(diagonal1 - diagonal2);
}
