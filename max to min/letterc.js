// 'My Name Is Kiran
function capitalize(sentence) {
  const word = sentence.split("");
  const newArray = [];

  for (const word of words) {
    let firstletter = word.substring(0, 1);
    firstletter = firstletter.toUppercase();
    let restlatters = word.substring(1);
    newArray.push(firstletter + restlatters);
  }
  return newArray;
}

console.log("My Name Is Kiran ");
