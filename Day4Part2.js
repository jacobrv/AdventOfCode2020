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

testValid = (value, rule) => {
  if (rule == "byr") {
    try {
      value = parseInt(value);
      if (value >= 1920 && value <= 2002) {
        return true;
      }
    } catch (e) {
      return false;
    }
  }

  if (rule == "iyr") {
    try {
      value = parseInt(value);
      if (value >= 2010 && value <= 2020) {
        return true;
      }
    } catch (e) {
      return false;
    }
  }

  if (rule == "eyr") {
    try {
      value = parseInt(value);
      if (value >= 2020 && value <= 2030) {
        return true;
      }
    } catch (e) {
      return false;
    }
  }

  if (rule == "hgt") {
    try {
      if (value.indexOf("cm") >= 0) {
        value = value.replace("cm", "");
        value = parseInt(value);
        if (value >= 150 && value <= 193) {
          return true;
        }
      } else if (value.indexOf("in") >= 0) {
        value = value.replace("in", "");
        value = parseInt(value);
        if (value >= 59 && value <= 76) {
          return true;
        }
      }
    } catch (e) {
      return false;
    }
  }

  if (rule == "hcl") {
    try {
      if (value.indexOf("#") != 0) {
        return false;
      }
      value = value.replace("#", "");
      value = parseInt(value, 16);
      if (value >= 0 && value <= 16777215) {
        return true;
      }
    } catch (e) {
      return false;
    }
  }

  if (rule == "ecl") {
    try {
      if (
        ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].indexOf(value) >= 0
      ) {
        return true;
      }
    } catch (e) {
      return false;
    }
  }

  if (rule == "pid") {
    try {
      if (value.length != 9) {
        return false;
      }
      value = parseInt(value, 10);
      if (value >= 0 && value <= 999999999) {
        return true;
      }
    } catch (e) {
      return false;
    }
  }

  if (rule == "cid") {
    return true;
  }

  return false;
};

for (let pi = 0; pi < passports.length; pi++) {
  let missing = false;
  for (let ri = 0; ri < required.length; ri++) {
    let found = false;
    for (let fi = 0; fi < passports[pi].length; fi++) {
      if (passports[pi][fi][0] == required[ri]) {
        if (testValid(passports[pi][fi][1], required[ri])) {
          found = true;
        }
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
