const intros = [
  "My Dearest",
  "To My Love",
  "Sweetheart",
  "My One and Only",
  "Beloved",
  "Darling",
  "My Heart",
  "My Treasure",
  "My Everything",
  "My Sunshine",
  "My Angel",
  "My Joy",
  "My Sweet Love",
  "My Dear",
  "My Light",
  "My Inspiration",
  "My Soulmate",
  "My Sweetest",
  "My Precious",
  "My Forever",
];
const compliments = [
  "Your smile brightens even my darkest days.",
  "You are the reason my heart beats with joy.",
  "Every moment with you feels like a dream come true.",
  "Your kindness and warmth inspire me every day.",
  "You make my world a better place just by being in it.",
  "I fall in love with you more and more each day.",
  "Your laughter is my favorite sound in the world.",
  "You are the missing piece I never knew I needed.",
  "Your love is the greatest gift I’ve ever received.",
  "You are my greatest adventure and my safest place.",
  "Your eyes sparkle like stars in the night sky.",
  "You have a heart of gold and a spirit that shines.",
  "You make even ordinary moments feel extraordinary.",
  "Your love is the anchor that keeps me grounded.",
  "You are the melody to my heart’s song.",
  "Your touch is like sunshine on a cold day.",
  "You are the reason I believe in magic.",
  "Your love is the light that guides me home.",
  "You are my today and all of my tomorrows.",
  "Your love is the sweetest symphony I’ve ever known.",
];
const memories = [
  "I’ll never forget the first time we met—it felt like fate.",
  "Remember that rainy day we spent talking for hours? Time stood still.",
  "Our trip to the beach last summer was pure magic.",
  "The way you held my hand during that movie made me feel so loved.",
  "I cherish every little moment, from coffee mornings to starlit nights.",
  "That surprise picnic you planned was the sweetest day of my life.",
  "I still smile thinking about how we danced in the kitchen that night.",
  "Our late-night conversations are my favorite part of every day.",
  "The way you supported me during my toughest times means everything.",
  "I’ll always remember how you made me feel like the only person in the room.",
  "Our first road trip together was an adventure I’ll never forget.",
  "The way you cheered me up after a bad day showed me how much you care.",
  "I’ll always treasure the handwritten note you left for me that morning.",
  "Our shared love for music makes every moment together special.",
  "The way you looked at me when we slow-danced at our friend’s wedding was unforgettable.",
  "Our spontaneous midnight drive to watch the stars is one of my favorite memories.",
  "The way you comforted me when I was sick made me fall in love with you even more.",
  "Our first holiday together was filled with laughter, love, and warmth.",
  "I’ll never forget the way you surprised me with my favorite dessert after a long week.",
  "The way we laughed until we cried that night is a memory I’ll always hold dear.",
];
const closings = [
  "Forever yours,",
  "With all my love,",
  "Yours always,",
  "Love you to the moon and back,",
  "Endlessly yours,",
  "With love and kisses,",
  "You have my heart,",
  "Until we meet again,",
  "With all the love in my heart,",
  "Forever and always,",
  "With endless affection,",
  "Yours in every way,",
  "With love that knows no bounds,",
  "Forever by your side,",
  "With all my heart and soul,",
  "Yours for eternity,",
  "With love that grows every day,",
  "Yours in love and life,",
  "With all the love I have to give,",
  "Forever loving you,",
];

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
