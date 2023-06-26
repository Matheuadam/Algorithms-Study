/*
Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

ar: an array of integers
Input Format

The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers representing the array's elements.

Constraints


Output Format

Print the sum of the array's elements as a single integer.
*/
function simpleArraySum(ar) {
  let array = ar;
  let resultSumIs = 0;

  for (let i = 0; i < ar.length; i++) {
    resultSumIs += ar[i];
  }
  return resultSumIs;
}
