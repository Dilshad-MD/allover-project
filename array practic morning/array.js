let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 8, 9, 12];

let i = 0;
let j = 0;

for (i = j; i < arr1.length; i++) {
  if (arr1[i] === arr2[j]) {
    console.log(arr1[i]);
  }
}
