let input = require( "readline-sync" );

let size = parseInt( input.question( "enter the array size : " ));
let array =[];
let evenCount=0;

console.log("Enter array Elementes");
for(i=0 ; i<size ;  i++){
    array[i] = input.question();
}
for(i=0 ; i<size ; i++){
   if(array[i]%2==0){
    evenCount++;
   }
}

console.log("Even numbers count in array is "+evenCount);