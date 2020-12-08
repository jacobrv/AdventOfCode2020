let vals = document.querySelector("pre").innerText.split("\n");

let allBags = [];

for (let i = 0; i < vals.length; i++) {
  if (!vals[i] || vals[i].length <= 0) {
    continue;
  }
  let temp = vals[i].split("bags contain");
  if (temp[1].indexOf("no other bags") >= 0) {
    allBags.push({ bagColor: temp[0].trim(), subBags: [] });
  } else {
    tSub = temp[1].split(",");
    for (let j = 0; j < tSub.length; j++) {
      tSub[j] = tSub[j].replace(" bags", "");
      tSub[j] = tSub[j].replace(" bag", "");
      tSub[j] = tSub[j].replace(".", "");
      tSub[j] = tSub[j].trim();
      let ttSub = tSub[j].split(" ");
      let numBags = ttSub.shift();
      tSub[j] = ttSub.join(" ");
      tSub[j] = tSub[j].trim();
    }
    allBags.push({ bagColor: temp[0].trim(), subBags: tSub });
  }
}

let numChecks = 0;

let validColors = [];

function getBagByColor(color) {
  return allBags.filter((x) => x.bagColor == color)[0];
}

function checkSubBags(color, bags, stack) {
  if (!color || !bags || bags.length <= 0) {
    return false;
  }
  let found = false;
  for (let c = 0; c < bags.length; c++) {
    numChecks++;
    if (bags[c] == color) {
      found = true;
      // console.log(stack + " : " + bags[c]);
      return true;
    } else {
      let isValid = checkSubBags(
        color,
        getBagByColor(bags[c]).subBags,
        stack + " : " + bags[c]
      );
      if (isValid) {
        validColors[bags[c]] = true;
        found = true;
      }
    }
  }
  return found;
}

function checkTopBags(color) {
  numBagsCanHold = 0;
  for (let b = 0; b < allBags.length; b++) {
    if (allBags[b].bagColor == color) {
    } else {
      if (checkSubBags(color, allBags[b].subBags, allBags[b].bagColor)) {
        numBagsCanHold++;
      }
    }
  }

  console.log(numBagsCanHold);
}

checkTopBags("shiny gold");
