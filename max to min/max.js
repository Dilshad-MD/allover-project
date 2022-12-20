let arr = [3, 2, 0, 9, 5, 11, 1];
let max = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
console.log(max + " max value");

let arr1 = [3, 2, 0, 9, 5, 11, 1];
let min = 0;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] < min) min = arr1[i];
}
console.log(min + " min value");
