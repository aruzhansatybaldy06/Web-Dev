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
const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);
//age cant be uppercase because it can change on runtime

//4
// no error
let message = "hello";
message = 123456;

//5
let n = 123;
n = 12.345;

//6
alert( 1 / 0 ); // Infinity

//7
alert( "not a number" / 2 ); // NaN, such division is erroneous

//8
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

//9
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

//10
let name1 = "John";
// embed a variable
alert( `Hello, ${name1}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

//11
alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)

//12
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

//13
let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")

//14
let age0 = null;

//15
let age1;
alert(age1); // shows "undefined"

//16
let age2 = 100;
// change the value to undefined
age2 = undefined;
alert(age2); // "undefined"

//17
let name5 = "Ilya";
alert( `hello ${1}` ); //  hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name5}` ); // hello Ilya
