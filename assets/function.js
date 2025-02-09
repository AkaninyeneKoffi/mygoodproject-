

function letsLogin(){
const username = document.getElementById("username").value;
 const password = document.getElementById("password").value;

login(username, password);
}
function login (userInput , userPassword) {
     
if ( userInput == "admin" && userPassword == "admin" ) {
    alert ('login successful')
}
else{
    alert ('login unsuccessful')
}
}
var button1 = document.getElementById("facebook").addEventListener("click", function()
{
    window.location.href = "https://facebook.com";
});
var button2 = document.getElementById("instagram").addEventListener("click", function()
{
    window.location.href = "https://www.instagram.com";
});
var button3 = document.getElementById("twitter").addEventListener("click", function()
{
    window.location.href = "https://www.x.com";
});
var button4 = document.getElementById("google").addEventListener("click", function()
{
    window.location.href = "https://www.google.com";
});


//onst checklogin = login (window.prompt ("enter username : ") , (window.prompt ("enter password : ") ))
