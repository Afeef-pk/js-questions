var input =require("readline-sync");

let mark;

console.log("Enter Your Mark to find grade: ");
mark=parseFloat(input.question() );

if(mark>=90 && mark<=100){
console.log("A Grade");
}else if(mark>=80 && mark<=89){
    console.log("B Grade");
}else if(mark>=70 && mark<=79){
    console.log("C Grade");
}else if(mark>=60 && mark<=69){
    console.log("D Grade");
}else if(mark>=50 && mark<=59){
    console.log("E Grade");
}else if(mark<50 && mark>=0){
    console.log("Failed");
}else{
    console.log("Invalid Mark");
}