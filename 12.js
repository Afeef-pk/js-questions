let input = require( "readline-sync" );
let limit = parseInt( input.question( "Enter the length of array: " ));
let array = [];
let count = 0;

for( let i = 0; i < limit; i++ ) {
    array[i] = parseInt( input.question());
}

for( let i = 0; i < limit; i++ ) {
    for( j = i+1; j < limit; j++ ) {
        if( array[i] < array[j] ) {
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
    }
}
console.log( array );