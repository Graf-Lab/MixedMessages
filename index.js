const names = [
  "Boo",
  "Lettuce",
  "Atch",
  "Cow says",
  "Doughnut",
  "Olive",
  "Hatch",
  "Tank",
  "Al",
  "Amos",
  "Anita",
  "Ano",
  "Art",
  "Banana",
  "Bee",
  "Cash",
  "Dexter",
  "Dough",
  "Egg",
  "Etch",
];
const punchlines = [
  "Don’t cry, it’s just a joke!",
  "Lettuce in, it’s cold out here!",
  "Bless you!",
  "No, cow says moo!",
  "Doughnut worry, be happy!",
  "Olive you!",
  "Gesundheit!",
  "You’re welcome!",
  "I’m a little teapot, short and stout!",
  "I didn’t know you cared!",
  "Because I’m shellfish!",
  "I’m not sure, but I think it’s a doorbell!",
  "I’m reading a book about anti-gravity—it’s impossible to put down!",
  "I used to be a baker, but I couldn’t make enough dough!",
  "I’m on a seafood diet—I see food and I eat it!",
  "I’m trying to organize a hide-and-seek tournament, but good players are hard to find!",
  "I’m friends with 25 letters of the alphabet—I don’t know Y!",
  "I’m a big fan of whiteboards—they’re remarkable!",
  "I’m not a regular dad, I’m a cool dad—hi, son, I’m dad!",
  "I’m a big fan of elevators—they really lift me up!",
];

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
