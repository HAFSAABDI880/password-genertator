
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
 } else if (passwordLength >= 8 || passwordLength <=128){

 }

 const isupperCase= confirm (" Do you want uppercase");
 const islowerCase =confirm ( "Do you want uppercase");
 const isNumbers= confirm ( " Do you want a number ");
 const ispecial =confirm (" Do you want special ");

 if (!islowerCase && !isupperCase && isNumbers && !ispecial) {
  alert ();
 }
 // 
 const choices =[]
 if (isupperCase){
  choices.push(isupperCase);
 }
 if(islowerCase){
  choices.push (islowerCase);
 }
 if(isNumbers){
  choices.push (isNumbers);
 }
 if( ispecial){
  choices.push (ispecial);
 }
let password= "";



 // generate random password 
  
 // Write password to the #password input
 function writePassword(params) {
  var password= generatePassword();
  var paswordTezt= document.querySelector('#password');
 } 
 //Add event listener to generate button
  generateBtn.addEventListener ("click", writePassword);
