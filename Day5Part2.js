let vals = document.querySelector("pre").innerText.split("\n");
let tickets = [];

for (let i = 0; i < vals.length - 1; i++) {
  let rowMin = 0;
  let rowMax = 127;
  let leftMin = 0;
  let leftMax = 7;
  let dirs = vals[i].split("");
  for (let j = 0; j < dirs.length; j++) {
    if (dirs[j] == "F") {
      rowMax = rowMax - (rowMax - rowMin + 1) / 2;
    }
    if (dirs[j] == "B") {
      rowMin = rowMin + (rowMax - rowMin + 1) / 2;
    }
    if (dirs[j] == "L") {
      leftMax = leftMax - (leftMax - leftMin + 1) / 2;
    }
    if (dirs[j] == "R") {
      leftMin = leftMin + (leftMax - leftMin + 1) / 2;
    }
  }
  tickets.push(rowMin * 8 + leftMin);
}
tickets = tickets.sort((a, b) => a - b);
console.log(tickets[tickets.length - 1]);

for (let x = 0; x < 1024; x++) {
  if (
    tickets.indexOf(x) < 0 &&
    tickets.indexOf(x - 1) >= 0 &&
    tickets.indexOf(x + 1) >= 0
  ) {
    console.log("Seat: " + x);
  }
}
