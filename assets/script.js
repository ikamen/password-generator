// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  var passwordLength = "";
  var hasLowerCase = "";
  var hasUpperCase = "";
  var hasNumeric = "";
  var hasSpecial = "";
  var isValidSelection = true;

  passwordLength = prompt("How many characters would you like your password to be?");

  //Check if pass length not a number OR empty string OR too short OR too long
  if (isNaN(passwordLength) || passwordLength.trim() === "") { 
  
    alert("Your input is not a number and we can't proceed!");
    isValidSelection = false;
  
  } else if (passwordLength < 10 || passwordLength > 64) {
    
    alert("Password length should be at least 10 characters and no more than 64");
    isValidSelection = false;

  } else {
  
    hasLowerCase = confirm ("Click OK to confirm including lowercase characters");
    hasUpperCase = confirm ("Click OK to confirm including uppercase characters");
    hasNumeric = confirm ("Click OK to confirm including numeric characters");
    hasSpecial = confirm ("Click OK to confirm including special characters ($@%&*, etc)");

    //Check if at least one character type is selected
    if (!hasLowerCase && !hasUpperCase && !hasNumeric && !hasSpecial) {
      alert("Your selected not to include any specific character type and we can't proceed!");
      isValidSelection = false;
    }
  }

  return {
    isValidSelection: isValidSelection,
    passwordLength: passwordLength,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumeric: hasNumeric,
    hasSpecial: hasSpecial
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomChar = arr[Math.floor(Math.random() * arr.length)];
  return randomChar;
}

// Function to generate password with user input
function generatePassword() {
  var generatedPassword = "";
  var userOptions = getPasswordOptions();
  
  //Check if user selections are valid before generating a password
  if (userOptions.isValidSelection === true) {
    //Build an array of characters based on the user selection or character types to be included in the password
    var charactersArray = [];
    if (userOptions.hasLowerCase) {
      charactersArray = charactersArray.concat(lowerCasedCharacters);
    }
    if (userOptions.hasUpperCase) {
      charactersArray = charactersArray.concat(upperCasedCharacters);
    }
    if (userOptions.hasNumeric) {
      charactersArray = charactersArray.concat(numericCharacters);
    }
    if (userOptions.hasSpecial) {
      charactersArray = charactersArray.concat(specialCharacters);
    }

    for (var i = 0; i < userOptions.passwordLength; i++) {
      generatedPassword += getRandom(charactersArray);
     }
  }

  return generatedPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);