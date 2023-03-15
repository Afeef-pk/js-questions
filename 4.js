var input =require("readline-sync");

let mark;

console.log("Enter Your Mark:");
mark=parseFloat(input.question() );

if(mark>100 || mark<0){
    console.log("Invalid mark")
}else if(mark>=50){
    console.log("Passed")
}else{
    console.log("failed")
}
