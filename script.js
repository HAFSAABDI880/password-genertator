
// Assignment code 
var generateBtn= document.querySelector("#generate"); 

function generatePassword () {
  const upperCase="ABCDEGHIJKLMNOPQRSTUVYXYZ2";
  const lowerCase=" abcdefghijklmnopqrstuvwxyxz";
  const Numbers=" 0123456789";
  const speical= "!@£$%&*?+=";}

  //get password lenghth
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
 const ispecial =confirm (" Do you want special ");

 if (!islowerCase && !isupperCase && isNumbers && !ispecial) {
  alert ();
  return;
 }
 // 
 const choices =[]
 if (isupperCase){
  choices.push(upperCase);
 }
 if(islowerCase){
  choices.push (lowerCase);
 }
 if(isNumbers){
  choices.push (Numbers);
 }
 if( isSpecial){
  choices.push (speical);
 }
let password= "";



 // generate random password 
 for ( let i=0; i < 10; i++) { 
const randomChoiceIndex= Maths.floor (Maths.random( )* choices.length); 

const randomCharacters= choice [randomChoiceIndex];

password += randomCharacters.charAt(
  Math.floor (Math.random() *randomCharacters.length)
);
}
{return password ;
}

 // Write password to the #password input
function writePassword() {
  var password = generatePassword();8
var passwordText = document.querySelector("#password");
 passwordText.value = password;

}
 //Add event listener to generate button
  generateBtnaddEventListener ("click", writePassword);
