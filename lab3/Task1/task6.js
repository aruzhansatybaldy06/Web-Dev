//1
let a = 1, b = 1;
alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value
alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

//2
let a1 = 2;
let x = 1 + (a1 *= 2);
// The answer is:
// a = 4 (multiplied by 2)
// x = 5 (calculated as 1 + 4)