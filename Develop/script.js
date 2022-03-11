// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var special = "!@#$%^&*()[]{}<>?/.,+=-_".split("");
var numbers = "1234567890".split("");
var length = "";
var finalPassword = [];
var password = [];

function generatePassword () {
  length = window.prompt("Please enter a password length between 8 and 128 characters.");

  console.log(length);

  if (length < 8 || length > 128) {
    window.alert("The password must be between 8 and 128 characters long.");
    return;
  }
//window confirm prompts
  var upperPrompt = window.confirm("Would you like to include uppercase characters?");
    if (upperPrompt === true) {
      password = password.concat(upper);
    }
    console.log(password);
  var lowerPrompt = window.confirm("Would you like to include lowercase characters?");
    if (lowerPrompt === true) {
      password = password.concat(lower);
    }
    console.log(password);
  var specialPrompt = window.confirm("Would you like to include special characters?");
    if (specialPrompt === true) {
      password = password.concat(special);
    }
    console.log(password);
  var numbersPrompt = window.confirm("Would you like to include numbers?");
    if (numbersPrompt === true) {
      password = password.concat(numbers);
    }
    console.log(password);

    //making sure all the characters are included
    console.log(password.toString());

// randomize the characters in the password?
    for (i = 0; i < length; i++) {
      password += Math.floor(Math.random() * length);
    }

    console.log(password);

}


//1. length
//2. ask upper
//3. ask lower
//4. ask special
//5. ask number
//6. display final password


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
