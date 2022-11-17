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

var el = document.createElement('p');
var passwordLength = "";
var hasLowerCase = "";
var hasUpperCase = "";
var hasNumeric = "";
var hasSpecial = "";

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt("How many characters would you like your password to be?");
  
  //Check if pass length not a number OR empty string
  if (isNaN(passwordLength) || passwordLength.trim() === "") { 
    alert("Your input is not a number and we can't proceed!");
    return "";
  }
  
  hasLowerCase = confirm ("Confirm if the password should contain lowercase characters?");
  hasUpperCase = confirm ("Confirm if the password should contain uppercase characters?");
  hasNumeric = confirm ("Confirm if the password should contain numeric characters?");
  hasSpecial = confirm ("Confirm if the password should contain special characters ($@%&*, etc)?");

  //Check if at least one character type is selected
  if (!hasLowerCase && !hasUpperCase && !hasNumeric && !hasSpecial) {
    alert("Your selected not to include any specific character type and we can't proceed!");
    return "";    
  }

  el.innerText = `You selected your password to:
    be ${passwordLength} characters long
    have lowercase characters: ${hasLowerCase}
    have uppercase characters: ${hasUpperCase}
    have numeric characters: ${hasNumeric}
    have special characters: ${hasSpecial}
    `;

  document.body.append(el);
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomChar = arr[Math.floor(Math.random() * arr.length)];
  return randomChar;
}

// Function to generate password with user input
function generatePassword() {
  var generatedPassword = "";
  
  //Check if user selections are valid before generating a password
  if (getPasswordOptions() !== "") {
    //Build an array of characters based on the user selection or character types to be included in the password
    var charactersArray = [];
    if (hasLowerCase) {
      charactersArray = charactersArray.concat(lowerCasedCharacters);
    }
    if (hasUpperCase) {
      charactersArray = charactersArray.concat(upperCasedCharacters);
    }
    if (hasNumeric) {
      charactersArray = charactersArray.concat(numericCharacters);
    }
    if (hasSpecial) {
      charactersArray = charactersArray.concat(specialCharacters);
    }

    for (var i = 0; i < passwordLength; i++) {
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