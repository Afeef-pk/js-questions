let input = require( "readline-sync" );
let size = input.question( "Enter array size:" );
let array1 = [];
let array2 = [];
let sumArray = [];
let temp = [];
for(i=0 ; i<size ; i++){
    array1[i]=[];
}
for(i=0 ; i<size ; i++){
    array2[i]=[];
}
console.log("Enter first Array Element" );
for( let i = 0; i < size ; i++ ) {
    for( let j = 0; j < size ; j++ ) {
       array1[i][j] = parseInt( input.question());
    }
}
console.log("Enter second Array Element" );
for( let i = 0; i < size ; i++ ) {
    for( let j = 0; j < size ; j++ ) {
       array2[i][j] = parseInt( input.question());
    }
}
for(i=0 ; i<size ; i++){
    sumArray[i]=[];
}
console.log(array1 );
console.log( array2 );
for( let i = 0; i < size ; i++ ) {
    for( let j = 0; j < size ; j++ ) {
        sumArray[i][j] = array1[i][j] + array2[i][j];
    }
}
console.log("Sum of this Two Array:");
console.log( sumArray );