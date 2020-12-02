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
  console.log(objs[i]);
}
let countGood = 0;
for (let i = 0; i < objs.length; i++) {
  let num = objs[i].password.split(objs[i].letter).length - 1;
  if (num <= objs[i].max && num >= objs[i].min) {
    countGood++;
  }
}
console.log(countGood);
