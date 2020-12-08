let vals = document.querySelector("pre").innerText.split("\n");
let commands = [];
for (let i = 0; i < vals.length; i++) {
  if (vals[i] && vals[i].length > 0) {
    let action = vals[i].split(" ")[0];
    let value = parseInt(vals[i].split(" ")[1]);
    commands.push({ action, value });
  }
}

for (let x = 0; x < commands.length; x++) {
  if (commands[x].action == "acc") {
    continue;
  }
  let acc = 0;
  let linesHit = [];
  let lineNum = 0;
  commands[x].action = commands[x].action == "nop" ? "jmp" : "nop";
  while (true) {
    if (lineNum > commands.length || lineNum < 0) {
      console.log("Memory out of bounds error.");
      break;
    }
    if (lineNum == commands.length) {
      console.log(
        `Program finished successfully.\nLine ${x} was faulty.\nACC: ${acc}`
      );
      break;
    }
    if (linesHit[lineNum]) {
      // console.log(`LOOP DETECTED:\nLINE NUM: ${lineNum}\nACC: ${acc}`);
      break;
    } else {
      linesHit[lineNum] = true;
    }

    switch (commands[lineNum].action) {
      case "acc":
        acc += commands[lineNum].value;
        lineNum++;
        break;

      case "jmp":
        lineNum += commands[lineNum].value;
        break;

      case "nop":
        lineNum++;
        break;
    }
  }
  commands[x].action = commands[x].action == "nop" ? "jmp" : "nop";
}

// console.log(commands);
