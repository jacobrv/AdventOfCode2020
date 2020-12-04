//https://adventofcode.com/2020/day/3/input

let vals = document.querySelector("pre").innerText.split("\n");
let rows = [];
let numTrees = 0;

for (let i = 0; i < vals.length; i++) {
  rows[i] = vals[i].split("");
}

let width = vals[0].length;
let height = vals.length;

let curX = 0;
let curY = 0;

for (let curY = 0; curY < height; curY++) {
  if (rows[curY][curX] == "#") {
    numTrees++;
  }

  curX = (curX + 3) % width;
}

console.log(numTrees);
