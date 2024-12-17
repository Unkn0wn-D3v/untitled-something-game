// Defining document elements
const randomText = document.getElementById("random-text");

const playButton = document.getElementById("playButton");
const tutorialButton = document.getElementById("tutorialButton");

// Defining variables
var splashText = [
  "We love Untitled Something Game!",
  "Also try watercycle.glitchedblox.net!",
  "H2O? More like H2 Oh no you died!",
  "Splish splash",
  "Is that a death message?",
  "Are you from Tennesee?",
  "This game has produced an ungodly amount of errors!",
  "Free edition!",
  "Broderick is the GOAT",
  "It's very sunny today...",
  "Buy one get one free!",
  "100% off on black friday!",
  "Making Mondays better, one step at a time!",
  "Better than coffee!",
  "Tell your friends!",
  "⬆⬆⬇⬇⬅➡⬅➡🅱🅰▶",
  "Leading the new generation!",
  "Sharper than a sphere!",
  "Topologically nonsensical!",
  "A straw has 3 holes!",
  `0.1 + 0.2 = ${0.1 + 0.2}!`,
  "Living that rockstar lifestyle!",
  "Killing two stones with one bird!",
  "Monkey business!",
  "QWERTY",
  "I ran out of ideas 😢",
  "Let me out of here...",
  "This is no place for someone like you.",
  "Caution: wet floors!",
  "Now with HTTPS!",
  "Blazingly fast!",
  "Sponsored by RAID: Shadow Legends!",
  "Will knock your socks off!",
  "Keep On Truckin'!",
  "Lickety Split!",
  "AAAAAAAAHHHHH HHHHHHHHHHHHHHH",
  "I would say a cheesy joke, but it's not very gouda!",
  "Absolutely whimsical!",
  "Pray allow me the distinct privilege of extending to you the most sincere and ceremonious salutations, wherein I humbly convey a brief, yet profoundly earnest acknowledgment of your esteemed presence in this most fortuitous of encounters—an overture which, though modest in form, is abundant in the cordiality of my intent and the warmth of my regard.",
  "As shown on caiden.kim!",
  "Antidisestablish -mentarianism!",
  "Quite absurd!",
  "Skibidi rizz",
  "The mitochondria is the powerhouse of the cell!",
  "[Insert splash text here]",
  "bmljZSDwn5GM",
  "😏",
];

// Meat and potatoes
changeSplashText();

// Functions
function randomInt(max) {
  var number = Math.floor(Math.random() * max);

  return number;
}

function changeSplashText() {
  let seenSplashMessages = JSON.parse(
    localStorage.getItem("seenMessages") ?? "[]"
  );
  let texts = splashText.filter((t) => !seenSplashMessages.includes(t));
  if (texts.length === 0) {
    seenSplashMessages = [];
    texts = splashText;
  }
  const newSplashText = texts[randomInt(texts.length)];

  randomText.textContent = newSplashText;
  localStorage.setItem(
    "seenMessages",
    JSON.stringify(seenSplashMessages.concat([newSplashText]))
  );
}
