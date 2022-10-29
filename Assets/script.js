// Assignment Code
var generateBtn = document.querySelector("#generate");





// added variables for the password generation
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialArr = ['!', '@', '#', '$', '*', '%']
var password = " ";



// function to prompt user for their password options
function promptUserForPasswordOptions() {
var passwordLength = parseInt(
  prompt("How many characters will your password be?"),
  10)
var hasSpecChars = confirm(
  "click ok to include spec chars in your password")
var hasUpperCase = confirm(
  "Click ok to include upper case characters")
var hasLowwerCase = confirm(
  "Click ok to include Lower case characters")
var hasNum = confirm(
  "Click ok to include number characters")

var passwordChoices = {
  passwordLength: passwordLength,
  hasSpecChars: hasSpecChars,
  hasUpperCase: hasUpperCase,
  hasLowwerCase: hasLowwerCase,
  hasNum: hasNum,
}
  return passwordChoices
}


// function for getting a random array element
function getRandomElement(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElement = arr[randomIndex]

  return randomElement
}

// funct o generate password with user choices
function generatePassword() {
 var choices = promptUserForPasswordOptions()

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
