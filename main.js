// Defining document elements
const randomText = document.getElementById("random-text");

const menu = document.getElementById("menu-div");
const credits = document.getElementById("credits");

const playButton = document.getElementById("playButton");
const tutorialButton = document.getElementById("tutorialButton");
const creditsButton = document.getElementById("creditsButton");

const levels = [
  document.getElementById("tutorial"),
  document.getElementById("level-one"),
];

// Defining variables
var splashText = [
  "We love Untitled Something Game!",
  "Also try watercycle .glitchedblox.net!",
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
  "As shown on caiden.kim!",
  "Antidisestablish -mentarianism!",
  "Quite absurd!",
  "Skibidi rizz",
  "The mitochondria is the powerhouse of the cell!",
  "[Insert splash text here]",
  "bmljZSDwn5GM",
  "Do you know what else is massive?",
  "Googity Googity Goo",
];

var currentScreen = menu;
var clickready = true;
var currentLevel = 0;

// Meat and potatoes
changeSplashText();

// Event listeners
playButton.addEventListener("click", () => {
  changeLevel(1);
  playButton.blur();
});

tutorialButton.addEventListener("click", () => {
  changeLevel(0);
  tutorialButton.blur();
});

creditsButton.addEventListener("click", () => {
  runCredits();

  creditsButton.blur();
});

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

async function changeLevel(levelNumber) {
  if (clickready) {
    const newScreen = levels[levelNumber];

    clickready = false;

    newScreen.style.display = "flex";
    currentScreen.classList.add("slide-out");
    newScreen.classList.add("slide-in");

    await sleep(4000);

    currentScreen.style.display = "none";

    currentScreen.classList.remove("slide-out");
    newScreen.classList.remove("slide-in");

    currentScreen = newScreen;

    await sleep(500);

    clickready = true;
  }
}

async function runCredits() {
  menu.style.display = "none";
  credits.style.display = "flex";
  document.body.style.background = "black";

  await sleep(15000);

  menu.style.display = "flex";
  credits.style.display = "none";
  document.body.style.background = "salmon";
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ?????
var pattern = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
  "Enter",
];

var current = 0;
var secretActivated = false;
var keyHandler = function (event) {
  if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
    current = 0;
    return;
  }

  current++;

  if (pattern.length === current && !secretActivated) {
    current = 0;
    secretActivated = true;

    iV33MaET = 0;
    Cu4Xg8Y = new Array(
      "n-resize",
      "nw-resize",
      "w-resize",
      "sw-resize",
      "s-resize",
      "se-resize",
      "e-resize",
      "ne-resize"
    );
    setInterval(
      "iV33MaET++;document.body.style.cursor=Cu4Xg8Y[iV33MaET%8]",
      150
    );

    window.alert("Close this popup and move your mouse.");
  }
};

document.addEventListener("keydown", keyHandler, false);
