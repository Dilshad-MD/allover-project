// let k = 5;
// let str = "";
// for (let i = 0; i < 5; i++) {
//   str = "";
//   for (let j = 0; j <= i; j++) {
//     str = str + "*";
//   }
//   console.log(str);
// }

// let str = "";
// for (let i = k; i >= 1; i--) {
//   str = "";
//   for (let j = 1; j <= i; j++) {
//     str = str + "*";
//   }
//   console.log(str);
// }

// let k = 5;
// for (let i = 1; i <= k; i++) {
//   str = "";
//   for (let j = 1; j <= i; j++) {
//     str = str + "*";
//   }
//   console.log(str);
// }

// for (let i = k - 1; i >= 1; i--) {
//   str = "";
//   for (let j = 1; j <= i; j++) {
//     str = str + "*";
//   }
//   console.log(str);
// }

// let k = 4;
// let str = "";
// let p = k - 1;
// for (let i = 1; i <= k; i++) {
//   str = "";
//   for (let j = p; j >= 1; j--) {
//     str = str + " ";
//   }
//   p--;
//   for (let k = 1; k <= i; k++) {
//     str = str + "*";
//   }
//   console.log(str);
// }

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += '\n'
// }
// console.log(string);

// let k = 4;
// let str = '';
// let p = 1;
// for(let i=k;i>=1;i--) {
//     str = '';
//     if(i!==0) {
//         for(let n=1;n<=p;n++) {
//             str = str + ' ';
//         }
//         p++;
//     }
//     for(let j = i;j>=1;j--) {
//         str = str + '*';
//     }
//     console.log(str);
// }
// ===================================================================

// let n = 7;
// let str = " ";
// for (let i = 1; i <= n; i++) {
//   str = "";
//   for (let j = 1; j < i; j++) {
//     str = str + " ";
//   }
//   str = str + "*";
//   console.log(str);
// }
// let m = 7;
// let st = " ";
// temp = "";
// for (let i = m; i >= m; i++) {
//   st = "";
//   for (let j = 1; j < i; j++) {
//     st = st + " ";
//   }
//   st = st + "*";
//   console.log(st);
// }

// let n = 7;
// let str = " ";
// for (let i = 1; i <= n; i++) {
//   str = "";
//   for (let j = 1; j < i; j++) {
//     str = str + " ";
//   }
//   str = str + "*";
//   console.log(str);
// }

// let n = 7;
// let str = " ";
// for (let i = 1; i <= n; i++) {
//   str = "";
//   for (let j = 1; j < i; j++) {
//     str = str + " ";
//   }
//   str = str + "*";
//   console.log(str);
// }

// let n = 7;
// let str = " ";
// for (let i = 1; i <= n; i++) {
//   str = "";
//   for (let j = 1; j < i; j++) {
//     str = str + " ";
//   }
//   str = str + "*";
//   console.log(str);
// }
// ===============================
let n = 7;
let str = " ";
for (let i = n; i >= 1; i--) {
  str = "";
  for (let j = 1; j < i; j++) {
    str = str + " ";
  }
  str = str + "*";
  console.log(str);
}
