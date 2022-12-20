// // let arr = [1, 2, 3, 4, 1, 2];

// // let result = arr.reduce((finalarr, current) => {
// //   let newArray = finalarr.find((item) => item.arr === current.arr);

// //   if (newArray) {
// //     return finalarr;
// //   }
// //   return finalarr.concat([current]);
// // }, []);
// // console.log(result);

// // =======================================
// // using filter function
// // let arr1 = [1, 2, 3, 4, 1, 2];

// // function removeDuplicates(array) {
// //   return arr1.filter((element, index) => arr1.indexOf(element) === index);
// // }
// // console.log(removeDuplicates(arr1));
// // ==================using foreach function=====================
// // let arr2 = [1, 2, 3, 4, 1, 2];
// // function removeDuplicates(array) {
// //   let x = {};

// //   array.forEach(function (i) {
// //     if (!x[i]) {
// //       x[i] = true;
// //     }
// //   });
// //   return Object.keys(x);
// // }
// // console.log(removeDuplicates(arr2));

// // ==================using foreach function=====================
// let arr3 = [1, 2, 3, 4, 1, 2];
// function removeDuplicates(array) {
//   let a = [];
//   array.map((x) => (!a.includes(x) ? a.push(x) : ""));
//   return a;
// }
// console.log(removeDuplicates(arr3));

// ======================================================

// ====================================================

// let arr = [1, 4, 7, 6, 8, -1, -4, -5, 8];

// let positiveArr = arr.map((a) => a >= 0);
// let negativeArr = arr.map((a) => a < 0);

// final_arr = negativeArr.map(function (v, i) {
//   return [v, positiveArr[i]];
// });
// console.log(final_arr);

// ========================================
// const arr = [2, -1, -4, 3, 6, 7, 5, -8];
// const positive = arr.filter((x) => x >= 0);
// const negative = arr.filter((x) => x < 0);
// const res = [];
// for (let i = 0, j = 0; i < positive.length || j < negative.length; i++, j++) {
//   if (j < negative.length) res.push(negative[i]);
//   if (i < positive.length) res.push(positive[i]);
// }
// console.log(res);
// ===================================================
// const arr = [1, 4, 7, 6, 8, -1, -4, -5, 8];
// arr.sort((a, b) => Math.abs(b) - Math.abs(a)).reverse();
// console.log(arr);

// // ==================
// let arr1 = [1, 4, 7, 6, 8, -1, -4, -5, 8];
// arr1.sort((a, b) => Math.abs(b) - Math.abs(a)).reverse();
// console.log(arr1);
let k = 5;
let str = "";
