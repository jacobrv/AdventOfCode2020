let vals = document.querySelector("pre").innerText.split("\n");
console.log(vals);
let valsParsed = [];
for (let i = 0; i <= vals.length; i++) {
  if (!vals[i] || vals[i].length <= 0) {
    continue;
  }
  valsParsed.push(parseInt(vals[i]));
}
valsParsed.push(0);
valsParsed = valsParsed.sort((a, b) => a - b);

console.log(valsParsed);

let diffs = [0, 0, 0, 0];

for (let x = 0; x < valsParsed.length - 1; x++) {
  diffs[valsParsed[x + 1] - valsParsed[x]]++;
  console.log(
    `${valsParsed[x + 1]} - ${valsParsed[x]} = ${
      valsParsed[x + 1] - valsParsed[x]
    }`
  );
  console.log(diffs);
}

diffs[3]++;

console.log(`1s: ${diffs[1]}`);
console.log(`2s: ${diffs[2]}`);
console.log(`3s: ${diffs[3]}`);
console.log(`Final: ${valsParsed[valsParsed.length - 1] + 3}`);
console.log(diffs[1] * diffs[3]);
