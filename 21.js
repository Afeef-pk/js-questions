let input = require( "readline-sync" );

let limit = parseInt( input.question( "enter limit: " ));
let arr = [];
let newArr = [];

for( let i = 0; i < limit; i++ ) {
    arr[i] = parseInt( input.questionInt());
   if( i != 0 ) {
        newArr[i-1] = arr[i] * arr[i-1];
    }
}

console.log( newArr );