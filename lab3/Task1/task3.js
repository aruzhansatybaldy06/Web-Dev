//1
let message;
message = 'Hello!';
alert(message); // shows the variable content

//2
let message1 = 'Hello!'; // define the variable and assign the value
alert(message1); // Hello!

//3
let user = 'John';
let age = 25;
let message2 = 'Hello';

//4
let user1 = 'John',
  age1 = 25,
  message3 = 'Hello';

//5
let message4;
message4 = 'Hello!';
message4 = 'World!'; // value changed
alert(message4);

//6
let hello = 'Hello world!';
let message5;
// copy 'Hello world' from hello into message
message5 = hello;
// now two variables hold the same data
alert(hello); // Hello world!
alert(message5); // Hello world!

//7
let userName;
let test123;

//8
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
alert($ + _); // 3

//9
let имя = '...';
let 我 = '...';

//10
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!

//11
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00




