/* Functions for generating random number lowercase uppercase letters , symbols */
// Creating function for generating random lowercase letter
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// for testing purpose
console.log(getRandomLower());

// Creating function for generating random uppercase letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// for testing purpose
 console.log(getRandomUpper());

// Creating function for generating random numbers
function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// for testing purpose
 console.log(getRandomNumber());

// Creating function for generating random symbols
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// for testing purpose
  console.log(getRandomSymbol());

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

const generate = document.getElementById("generateBtn"); 
generate.addEventListener("click", () => {
  const length = document.getElementById("Passwordlength").value;
  const hasUpper = document.getElementById("uppercase").checked;
  const hasLower = document.getElementById("lowercase").checked;
  const hasNumber = document.getElementById("numbers").checked;
  const hasSymbol = document.getElementById("symbols").checked;
  const result = document.getElementById("PasswordResult");
  result.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
   console.log(hasLower, hasUpper, hasNumber, hasSymbol);
});

// function for generating random password
function generatePassword(lower, upper, number, symbol, length) { 
    let generatedPassword = "";
    const typesCount = lower + upper + number + symbol;
// for testing purpose
    console.log(typesCount);


    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0]
    );
    console.log(typesArr);
  
    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }
  
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
  }
  
  // copy to clipboard
let button = document.getElementById("clipboardBtn");

button.addEventListener("click", (e) => {
  e.preventDefault();
  // execute command for copy text by selecting textarea text with id
  document.execCommand(
    "copy",
    false,
    document.getElementById("PasswordResult").select()
  );
});