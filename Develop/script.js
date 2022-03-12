// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*()[]{}<>?/.,+=-_";
var numbers = "1234567890";


//function to generate the password
function generatePassword () {
  var length = window.prompt("Please enter a password length between 8 and 128 characters.");

  console.log(typeof length == 'number');
  //local variables
  var password = "";
  var characters = "";


  if (length < 8 || length > 128) {
    window.alert("The password must be between 8 and 128 characters long.");
    return password;
  }
//window confirm prompts
  var upperPrompt = window.confirm("Would you like to include uppercase characters?");
    if (upperPrompt === true) {
      characters += upper;
      //Add to the list of guarenteed characters that must be included in final password.
      var index = Math.floor(Math.random() * upper.length);
      password += upper.charAt(index);
    }

  var lowerPrompt = window.confirm("Would you like to include lowercase characters?");
    if (lowerPrompt === true) {
      characters += lower;
      var index = Math.floor(Math.random() * lower.length);
      password += lower.charAt(index);
    }

  var specialPrompt = window.confirm("Would you like to include special characters?");
    if (specialPrompt === true) {
      characters += special;
      var index = Math.floor(Math.random() * special.length);
      password += special.charAt(index);
    }

  var numbersPrompt = window.confirm("Would you like to include numbers?");
    if (numbersPrompt === true) {
      characters += numbers;
      var index = Math.floor(Math.random() * numbers.length);
      password += numbers.charAt(index);
    }

  if (password.length === 0) {
    window.alert("You must choose at least one option.");
    return password;
  } 

// randomize the characters in the password?
    for (i = password.length; i < length; i++) {
      var index = Math.floor(Math.random() * characters.length);
      password += characters.charAt(index);
    } 

    console.log(password);
    password = password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password;
}

//If selection is true, grab one character from array and store in guarenteedCharacters. Concat to end each time.
//Then concat the guarenteedCharacters to the randomized characters to ensure you have at least one
//of each selected character.


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
