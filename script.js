 // Assignment code 
 var generateBtn= document.querySelector("#generate"); 

function generatePassword () {
  const upperCase="ABCDEGHIJKLMNOPQRSTUVYXYZ2";
  const lowerCase=" abcdefghijklmnopqrstuvwxyxz";
  const Numbers=" 0123456789";
  const speical= "!@£$%&*?+=";}

  //get password lenght
  const passwordLength= Number (prompt("Enter a password lenght:"));

  console.log(passwordLength);

  if ( passwordLength < 8 || passwordLength>128) {
    alert("error");
    return passwordLength;
 } else if (passwordLength >= 8 || passwordLength <=128){

 }

 const isupperCase= confirm (" Do you want uppercase");
 const islowerCase =confirm ( "Do you want uppercase");
 const isNumbers= confirm ( " Do you want a number ");
 const isspecisl =confirm (" Dp you want special ");


 // Write password to the #password input
function writePassword() {
  var password = generatePassword();
var passwordText = document.querySelector("#password");
 passwordText.value = password;

}
 //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);