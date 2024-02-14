//1
let admin, name;
name = "John";
admin = name;
alert( admin );

//2
//Create a variable with the name of our planet. How would you name such a variable?
let ourPlanetName = "Earth";
//Create a variable to store the name of a current visitor to a website. How would you name that variable?
let currentUserName = "Aruka";

//3
//Here we have a constant birthday for the date, and also the age constant.
// The age is calculated from birthday using someCode(), which means a 
//function call that we didn’t explain yet (we will soon!), but the details 
//don’t matter here, the point is that age is calculated somehow based on the birthday.
// Would it be right to use upper case for birthday? For age? Or even for both?
const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);
//age cant be uppercase because it can change on runtime
