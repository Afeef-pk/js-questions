function main() {
    let array = [];
    array = getArray();
    displayArray( array );
}

function getArray() {
    let array = [];
    let input = require( "readline-sync" );
    let length = input.question( "enter the length of array: " );
    for( let i = 0; i < length; i++ ) {
        array[i] = input.question( `enter ${i}th element: ` );
    }
   return array;
}

function displayArray( array ) {
    console.log( array );
}

main();