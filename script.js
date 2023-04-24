function required()
{
var blank = document.forms["fname"]["lname"]["mail"]["gend"].value;
if (blank == "")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Succesful Sign-in');
return true; 
}}