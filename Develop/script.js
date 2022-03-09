// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*()[]{}<>?/\|+=-_";
var numbers = "1234567890";
var length = "";
var finalPassword

function password () {
  length = window.prompt("Please enter a password length between 8 and 128 charachters.")

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
