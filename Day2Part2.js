// https://adventofcode.com/2020/day/2/input
let vals = document.querySelector("pre").innerText.split("\n");
let objs = [];
for (let i = 0; i < vals.length; i++) {
  let temp = vals[i].split(": ");
  if (!temp) {
    break;
  }
  let range = temp[0].split(" ")[0];
  let letter = temp[0].split(" ")[1];
  if (!letter) {
    break;
  }
  let min = parseInt(range.split("-")[0]);
  let max = parseInt(range.split("-")[1]);
  objs[i] = {
    min: min,
    max: max,
    letter: letter,
    password: temp[1],
  };
  // console.log(objs[i]);
}
let countGood = 0;
for (let i = 0; i < objs.length; i++) {
  console.log(objs[i]);

  let targetLetter = objs[i].letter;
  let firstLetter = objs[i].password.charAt(objs[i].min - 1);
  let secondLetter = objs[i].password.charAt(objs[i].max - 1);

  if (
    (firstLetter == targetLetter && secondLetter != targetLetter) ||
    (firstLetter != targetLetter && secondLetter == targetLetter)
  ) {
    countGood++;
  }
}
console.log(countGood);
