//Variables assigned to special characters, uppercase, lowercase, and numbers
var specialCharacter = "!@#$%^&*()";

var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numbers = "1234567890";

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

 //user imput  

var password = "";

function writePassword(WORD) { //WORD is a placeholder for the value of passwordText(so there is someting that appears in text-box).

  var passwordText = document.querySelector("#password");
  passwordText.value = WORD;
}

function generatePassword() {
  var userChoice = "";
  var passLength = parseInt(
    window.prompt("How many characters would you like the password to be?")
  );
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passLength);
  if (!passLength) {
    return;
  } else if (passLength > 128) {
    //confirmation for maximum password length
    alert("Your input needs to be 128 or less");
    return;
  } else if (passLength < 8) {
    //confirmation for minimum password length
    alert("Your imput needs to be 8 characters or more");
    return;
  } else {
    //confirms to allow the user to be able to include special characters, lowercase, uppercase, and numbers
    var isSpecChosen = window.confirm(
      "click OK to confirm including special characters"
    );
    console.log(isSpecChosen);
    var isLowerCase = window.confirm(
      "click OK to confirm including lowercase characters"
    );
    console.log(isLowerCase);
    var isUpperCase = window.confirm(
      "click OK to confirm including uppercase characters"
    );
    console.log(isUpperCase);
    var isNumber = window.confirm(
      "click OK to confirm including numeric characters"
    );
  }
  // The line right below is letting the user know if they did not choose any special characters.

  if (!isSpecChosen && !isLowerCase && !isUpperCase && !isNumber) {
    //confirmation for not choosing any type of characters
    alert("You didn't choose a character type!");
    return;
  }
  if (isSpecChosen) { //If user chooses to use special characters, then that number of characters chosen will be special characters joined together
    userChoice = userChoice.concat(specialCharacter);
  }
  if (isLowerCase) { //These select what characters the user wants in their code
    userChoice = userChoice.concat(lowerCase);
  }
  if (isUpperCase) { //These select what characters the user wants in their code
    userChoice = userChoice.concat(upperCase);
  }
  if (isNumber) { //These select what characters the user wants in their code
    userChoice = userChoice.concat(numbers);
  }
  console.log("Goodmorning",userChoice, passLength); //This is used for testing purposes
  guessword(passLength, userChoice)
}

function guessword(length, choice) {//taking the user choices into consideration of creating a password.
  console.log("Goodnight", length, choice)

  
  var password = "";
  for (var i = 0; i < length; i++) { //For loop for creating password off user prompt imput, and confirmed user choices.
    password += choice.charAt(Math.floor(Math.random() * choice.length));
    console.log("Goodevening", password)
  }
writePassword(password) //Actually writing password on console LOG
}

