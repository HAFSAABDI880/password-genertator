 // Assignment code 
const generateBtn = document.querySelector("#generate");

const getPasswordCriteria = () => {
  return [
     "abcdefghikjklmnopqrstuvxyz",
    "ABCDEFGHIJKLMNOPQRSTUVXYZ",
    "0123456789",
    "!\"#$%&@'()*+,-./:;<_>?@[]^_'{|}~",
  ];
  

};

const createRandomPassword= () => {
  return "kdUE28(@d0";
};
var lowerCase ="abcdefghikjklmnopqrstuvxyz"
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVXYZ"
var numbers =    "0123456789"
var specialCharacters = "!\"#$%&@'()*+,-./:;<_>?@[]^_'{|}~"


var allCharachters = ""

//main function to generate the random password
  const generatePassword= () => {

  // get the password lenghth
const passwordLength= prompt("How long do you want your password to be")
 console.log (passwordLength, " password length");
 if( passwordLength< 8) {  
  alert( "invalid")
 }
 if ( passwordLength>128) {
  alert ( "invalid")
 }
  //var includeUppercase = confirm(" press okay if yuo want to includd uppercase")
  //console.log (includeUppercase )
  //var includeNumber= confirm ( "Do you want to include numbers ")
 // var includeLowercase =confirm ("Do you want to include lower case")
  //var includeSpecialCharacters =confirm ("Do you want to include special charachters")

  //if(includeUppercase === true ) {
    //console.log ("The user wants uppercase")
    // console.log( " The user wants lowercase")  }
// create the password criteria 
  // const passwordCriteria=getpasswordCriteria();

 // create a random password 
  //const password= createrandomPassword(PasswordLength, PasswordCriteria);

return password;
};

// Write password to the #password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
