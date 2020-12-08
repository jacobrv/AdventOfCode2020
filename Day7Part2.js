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
    let mySubBags = [];
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
      mySubBags.push({ bagColor: tSub[j], count: numBags });
    }
    allBags.push({ bagColor: temp[0].trim(), subBags: mySubBags });
  }
}

function getBagByColor(color) {
  return allBags.filter((x) => x.bagColor == color)[0];
}

function checkSubBags(bags) {
  if (!bags || bags.length <= 0) {
    return 1;
  }
  let bagCount = 0;
  for (let c = 0; c < bags.length; c++) {
    let curBag = getBagByColor(bags[c].bagColor);
    bagCount += bags[c].count * checkSubBags(curBag.subBags);
  }
  return bagCount + 1;
}

function checkTopBags(color) {
  numBagsCanHold = checkSubBags(getBagByColor(color).subBags);
  console.log(numBagsCanHold - 1);
}

checkTopBags("shiny gold");
