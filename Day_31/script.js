const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const clipboardBtn = document.getElementById("clipboard");

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$^&*(){}[]=<>/,.";

  return symbols[Math.floor(Math.random() * symbols.length)];
}

const getRandom = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateBtn.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const types = [{ lower }, { upper }, { number }, { symbol }].filter(
    (type) => Object.values(type)[0]
  );

  if (typesCount === 0) return "Nothing Selected";

  for (let i = 0; i < length; i++) {
    types.forEach((type) => {
      const randomType = Object.keys(type)[0];

      generatedPassword += getRandom[randomType]();
    });
  }

  return generatedPassword.slice(0, length);
}

clipboardBtn.addEventListener("click", () => {
  navigator && navigator.clipboard && navigator.clipboard.writeText
    ? navigator.clipboard.writeText(resultEl.textContent)
    : Promise.reject("The Clipboard API is not available.");
});
