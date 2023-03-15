let input = require( "readline-sync" );

let size = parseInt( input.question( "enter the array size : " ));

let array1 =[];
let array2 =[];

console.log("Enter array 1 Elementes");
for(i=0 ; i<size ;  i++){
    array1[i] = input.question( `enter ${i} th element of array1: ` );
}
console.log("Enter array 2 Elementes");
for(i=0 ; i<size ;  i++){
    array2[i] = input.question( `enter ${i} th element of array2: ` );
}

for( let i = 0; i < size; i++ ) {
    let temp = array1[i];
    array1[i] = array2[i];
    array2[i] = temp;
}

console.log( "array After Swapping" );
console.log( "array1: " + array1 );
console.log( "array2: " + array2 );
