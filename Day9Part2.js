let vals = document.querySelector("pre").innerText.split("\n");

let preambleLength = 25;
let invalid = [];

function checkLast25(list, index) {
  if (index < preambleLength) {
    return true;
  }

  let start = index - preambleLength;
  let end = index;

  for (let i = start; i < end - 1; i++) {
    for (let j = i + 1; j < end; j++) {
      if (parseInt(list[i]) + parseInt(list[j]) == parseInt(list[index])) {
        if (parseInt(list[i]) != parseInt(list[j])) {
          return true;
        }
      }
    }
  }
  return false;
}

function checkList() {
  for (let x = 0; x < vals.length; x++) {
    let isValid = checkLast25(vals, x);
    if (!isValid) {
      invalid.push({ val: parseInt(vals[x]), idx: x });
    }
  }
}

checkList();
console.log(invalid);

let weaknessTarget = invalid[0].val;

for (let si = 0; si < vals.length - 2; si++) {
  let runningTotal = parseInt(vals[si]);
  for (sx = si + 1; sx < vals.length - 1; sx++) {
    runningTotal += parseInt(vals[sx]);
    if (runningTotal == weaknessTarget) {
      let section = vals.slice(si, sx + 1);

      section = section.sort((a, b) => {
        return parseInt(a) - parseInt(b);
      });

      let grandTotal =
        parseInt(section[0]) + parseInt(section[section.length - 1]);

      console.log(grandTotal);
    }
  }
}
