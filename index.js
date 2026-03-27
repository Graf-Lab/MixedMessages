const names = [];
const punchlines = [];

function selectVariable(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function deliverJoke() {
  let name = selectVariable(names);
  let punchline = selectVariable(punchlines);

  console.log(`Knock knock!!`);
  console.log(`Whoes there?`);
  console.log(`${name}!!`);
  console.log(`${name} who?`);
  console.log(`${punchline}!!`);
}

deliverJoke();
