// Assignment Code
var generateBtn = document.querySelector("#generate");

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
//array for the collection of all the users choices
var allPossibleChar = [];
//array to collect all of the values generated for the password
var finalPassword = [];

//start the function to get the randoomly generated password
function promptUserForPasswordOptions() {
  var passwordLength = parseInt(
    prompt("How many characters will your password be?"),
    10
  );
  //this shouyld force the user to enter a number, otherwise they cant proceed
  if (isNaN(passwordLength)) {
    alert("STOP!! You must enter a value!!!!");
    return promptUserForPasswordOptions();
  }
  //this should force the user select the correct amount of characters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect! Please select a value between 8 and 128");
    return promptUserForPasswordOptions();
  }
  // the next list of confirms are all the info the user needs to give to set the paramaters for the password to generate
  var hasSpecChars = confirm(
    "Click OK to include SPECIAL characters in your password!"
  );
  var hasUpperCase = confirm("Click OK to include UPPER CASE characters!");
  var hasLowerCase = confirm("Click OK to include LOWER CASE characters!");
  var hasNumbers = confirm("Click OK to include NUMBERS!");
  //this will add the special character array to our collection if the user select OK
  if (hasSpecChars) {
    allPossibleChar = allPossibleChar.concat(specialArr);
    console.log(allPossibleChar);
  }
  //this will add the upper case array to our collection if the user select OK
  if (hasUpperCase) {
    allPossibleChar = allPossibleChar.concat(lowerCaseArr);
    console.log(allPossibleChar);
  }
  //this will add the lower case array to our collection if the user select OK
  if (hasLowerCase) {
    allPossibleChar = allPossibleChar.concat(upperCaseArr);
    console.log(allPossibleChar);
  }
  //this will add the number array to our collection if the user select OK
  if (hasNumbers) {
    allPossibleChar = allPossibleChar.concat(numbersArr);
    console.log(allPossibleChar);
  }
  //this should remove all of the arrays that the user didnt select in the previous confirm messages
  //it will also kick the user back to the start if they select false to all the confirm prompts
  if (!hasSpecChars && !hasUpperCase && !hasLowerCase && !hasNumbers) {
    alert("Caution! Must select atleast one array of characters!");
    return promptUserForPasswordOptions();
  }
  //this will loop through to get the password to the desired length
  for (var i = 0; i < passwordLength; i++) {
    //this is a formula found online to generate random values
    var randomIndex = Math.floor(Math.random() * allPossibleChar.length);
    //this puts together the combination of the users choices and randomizes them for the finalPassword
    finalPassword = finalPassword.concat(allPossibleChar[randomIndex]);
  }
  //this .join() action removes all of the commas from the password when it gets generated
  return finalPassword.join("");
}
