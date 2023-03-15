var input = require("readline-sync");

let P,R,n,SI;

console.log("Enter Principal amount");
P=parseInt(input.question() );

console.log("Enter Interest rate")
R=parseFloat(input.question() );

console.log("Enter Number of years");
n=parseFloat(input.question() );

SI=(P*R*n/100)
console.log("Simple Interest is " +SI );
