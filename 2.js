let input = require( "readline-sync" );

let number1;
let number2;
let sum;
console.log( "enter two Numbers:" );

number1 = parseInt( input.question() )
number2 = parseFloat( input.question() )
sum =(number1 + number2);

console.log("sum is " +sum);
