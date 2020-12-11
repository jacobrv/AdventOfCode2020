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
