const affirmations = [
  "~ You are enough, just as you are 🧘🏻‍♀️",
  "~ Breathe in calm, breathe out stress.",
  "~ Every day is a new beginning.",
  "~ You are growing stronger each moment.",
  "~ Peace begins with a single breath.",
  "~ Trust yourself and your journey.",
  "~ You are rooted in strength and grace.",
  "~ Your potential is as endless as the sky.",
  "~ Small steps every day lead to big changes.",
  "~ You are a light in the world—shine bright.",
  "~ Growth is found in the gentle moments.",
  "~ Your kindness creates ripples of hope.",
  "~ Every breath is a fresh beginning.",
  "~ You are worthy of peace and happiness.",
  "~ Trust the timing of your journey.",
  "~ Strength grows in the calm of your heart.",
  "~ You are exactly where you need to be.",
];

function showAffirmation() {
  let affirmationElement = document.querySelector("#affirmation");
  let random = affirmations[Math.floor(Math.random() * affirmations.length)];

  affirmationElement.textContent = "";
  new Typewriter("#affirmation", {
    strings: [random],
    autoStart: true,
    cursor: null,
  });
}

let positivityButton = document.querySelector("button");
positivityButton.addEventListener("click", showAffirmation);
