let vals = document.querySelector("pre").innerText.split("\n\n");
let passports = [];
let required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let notRequired = ["cid"];
let numValid = 0;

for (let i = 0; i < vals.length; i++) {
  vals[i] = vals[i].replace(/\n/g, " ");
  let tempPass = vals[i].split(" ");
  passports[i] = [];
  for (let j = 0; j < tempPass.length; j++) {
    passports[i].push(tempPass[j].split(":"));
  }
}

console.log(passports);

for (let pi = 0; pi < passports.length; pi++) {
  let missing = false;
  for (let ri = 0; ri < required.length; ri++) {
    let found = false;
    for (let fi = 0; fi < passports[pi].length; fi++) {
      if (passports[pi][fi][0] == required[ri]) {
        found = true;
      }
    }
    if (!found) {
      missing = true;
    }
  }
  if (!missing) {
    numValid++;
  }
}

console.log(numValid);
