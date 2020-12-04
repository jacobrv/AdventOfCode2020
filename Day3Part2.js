//https://adventofcode.com/2020/day/3/input

let vals = document.querySelector("pre").innerText.split("\n");
let rows = [];
let numTrees = [];
let slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

for (let i = 0; i < vals.length; i++) {
  rows[i] = vals[i].split("");
}

let width = vals[0].length;
let height = vals.length;

for (let si = 0; si < slopes.length; si++) {
  let curX = 0;
  let curY = 0;
  numTrees[si] = 0;
  while (curY < height) {
    if (rows[curY][curX] == "#") {
      numTrees[si]++;
    }
    curY = curY + slopes[si][1];
    curX = (curX + slopes[si][0]) % width;
  }
}

console.log(numTrees);

let totalTrees = numTrees[0];
for (let j = 1; j < numTrees.length; j++) {
  totalTrees = totalTrees * numTrees[j];
}
