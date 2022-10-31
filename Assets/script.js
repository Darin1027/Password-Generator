// Assignment Code
var generateBtn = document.querySelector("#generate");
// funct o generate password with user choices
// function generatePassword() {
//   choices = promptUserForPasswordOptions()
// }
// Write password to the #password input
function writePassword() {
  var password = promptUserForPasswordOptions();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// added variables for the password generation
var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = ["!", "@", "#", "$", "*", "%"];
var allPossibleChar = [];
var finalPassword = [];

function promptUserForPasswordOptions() {
  var passwordLength = parseInt(
    prompt("How many characters will your password be?"),
    10
  );
  // console.log(passwordLength)
  if (isNaN(passwordLength)) {
    alert("STOP!! You must enter a value!!!!");
    return promptUserForPasswordOptions();
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect! Please select a value between 8 and 128");
    return promptUserForPasswordOptions();
  }
  var hasSpecChars = confirm(
    "Click OK to include SPECIAL characters in your password!"
  );
  var hasUpperCase = confirm("Click OK to include UPPER CASE characters!");
  var hasLowerCase = confirm("Click OK to include LOWER CASE characters!");
  var hasNumbers = confirm("Click OK to include NUMBERS!");
  if (hasSpecChars) {
    allPossibleChar = allPossibleChar.concat(specialArr);
    console.log(allPossibleChar);
  }
  if (hasUpperCase) {
    allPossibleChar = allPossibleChar.concat(lowerCaseArr);
    console.log(allPossibleChar);
  }
  if (hasLowerCase) {
    allPossibleChar = allPossibleChar.concat(upperCaseArr);
    console.log(allPossibleChar);
  }
  if (hasNumbers) {
    allPossibleChar = allPossibleChar.concat(numbersArr);
    console.log(allPossibleChar);
  }
  if (!hasSpecChars && !hasUpperCase && !hasLowerCase && !hasNumbers) {
    alert("Caution! Must select atleast one array of characters!");
    return promptUserForPasswordOptions();
  }
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allPossibleChar.length);
    finalPassword = finalPassword.concat(allPossibleChar[randomIndex]);
  }
  return finalPassword.join("");
}
