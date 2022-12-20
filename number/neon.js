// check to neon number
// let num = 9;

// let sqr = num * num;
// let sum = 0;

// while (sqr != 0) {
//   let rem = sqr % 10;
//   sum = sum + rem;
//   sqr = Math.floor(sqr / 10);
// }

// if (num == sum) {
//   console.log("Number is Neon");
// } else {
//   console.log("Not a Neon Number");
// }
// // check to prime Number

// let a = 133;
// let flag = true;
// for (let i = 2; i < a; i++) {
//   if (a % i === 0) {
//     flag = false;
//     break;
//   }
// }
// if (flag) {
//   console.log("Prime Number");
// } else {
//   console.log("Composite Number");
// }

// armstrong number
// let b = 153;

// let sum = 0;
// while (sqr != 0) {
//   let rem = sqr % 10;
//   sum = sum ** rem;
//   sqr = Math.floor(sqr / 10);
// }
// if (b == sum) {
//   console.log("Number is Armstrong");
// } else {
//   console.log("Not a Armstrong Number");
// }
// =================================================================
// Armstrong number
function armstrong(num) {
  var digits = num.toString().split("");
  var realDigits = num;
  var a = 0;

  for (let i = 0; i < digits.length; i++) {
    digits[i] = Math.pow(digits[i], digits.length);
    a += digits[i];
  }
  if (a == realDigits) {
    console.log(num);
  }
}

for (let hello = 1; hello <= 1000; hello++) {
  armstrong(hello);
  // console.log(hello);
}
