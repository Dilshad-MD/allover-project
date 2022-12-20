let shift_letters = function (text) {
  let s = text.split("");

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "":
        break;
      case "z":
        s[i] = "a";
      case "Z":
        s[i] = "A";

      default:
        s[i] = String.fromCharCode(s[i].charCodeAt(0) + 3);
    }
  }
  return s.join("");
};
// // cansole.log(shift_letters("abcd"));
// // console.log(shift_letters("abcd"));
console.log(shift_letters("azyx"));
