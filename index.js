const intros = [];
const compliments = [];
const memories = [];
const closings = [];

function selectVariable(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function deliverJoke() {
  let intro = selectVariable(intros);
  let compliment = selectVariable(compliments);
  let memory = selectVariable(memories);
  let closing = selectVariable(closings);

  console.log(intro);
  console.log(compliment);
  console.log(memory);
  console.log(closing);
}

deliverJoke();
