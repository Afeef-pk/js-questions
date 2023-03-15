let input = require( "readline-sync" );

let limit = parseInt( input.question( "enter a limit: " ));

let str= "";
for( let i = 1; i <= limit; i++ ) {
    for( let j = 1; j <= i; j++ ) {
        str += " " + j;
    }
    console.log( str );
    str = "";
}
