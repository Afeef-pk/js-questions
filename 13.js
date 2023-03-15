let input = require( "readline-sync" );

let word = input.question( "enter a word: " );
let length = word.length;

for( let i = 0; i <= length/2; i++ ) {
    if( word[i] != word[length - ( i + 1 )] ) {
        console.log( "Entered string is not a palindrome" );
        break
    } else {
        if( i == parseInt( length / 2 ) ) {
            console.log( "Entered string is a palindrome" );
        }
    }
}