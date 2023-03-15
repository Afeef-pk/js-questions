let input = require( "readline-sync" );

let choice = parseInt(
    input.questionInt( "enter:\n 1 for addition\n 2 for substraction\n 3 for division\n 4 for multiplication\n" )
);

let a = parseInt( input.question( "enter two numbers: \n" ));
let b = parseInt( input.question() );

if( choice == 1 ) {
    addition();
} else if( choice == 2 ) {
    subtraction();
} else if( choice == 3 ) {
    division();
} else if( choice == 4 ) {
    multiplication();
} else {
    console.log( 'invalid choice! try again' );
}

function addition(){
    console.log( `result is ${ a + b }` );
}
function subtraction(){
    console.log( `result is ${ a - b }` );
}
function multiplication(){
    console.log( `result is ${ a * b }` );
}
function division(){
    console.log( `result is ${ a / b }` );
}