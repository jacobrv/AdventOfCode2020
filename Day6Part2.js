let vals = document.querySelector("pre").innerText.split("\n\n");

let count = 0;

let groups = [];
for (let i = 0; i < vals.length; i++) {
  let answers = [];

  let people = vals[i].split("\n");
  groups.push(people);

  people = people.filter((person) => {
    return person && person.length > 0;
  });

  for (let j = 0; j < people.length; j++) {
    if (people[j] && people[j].length > 0) {
      let letters = people[j].split("");
      for (let k = 0; k < letters.length; k++) {
        if (!answers[letters[k]]) {
          answers[letters[k]] = 1;
        } else {
          answers[letters[k]] += 1;
        }
      }
    }
  }

  let answerKeys = Object.keys(answers);

  for (let x = 0; x < answerKeys.length; x++) {
    if (answers[answerKeys[x]] == people.length) {
      count += 1;
    }
  }
}

console.log(count);
