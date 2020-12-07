let vals = document.querySelector("pre").innerText.split("\n\n");

let count = 0;

let groups = [];
for (let i = 0; i < vals.length; i++) {
  let answers = [];

  let people = vals[i].split("\n");
  groups.push(people);

  for (let j = 0; j < people.length; j++) {
    if (people[j] && people[j].length > 0) {
      let letters = people[j].split("");
      for (let k = 0; k < letters.length; k++) {
        answers[letters[k]] = true;
      }
    }
  }

  count += Object.keys(answers).length;
}

console.log(count);
