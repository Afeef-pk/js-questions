let input = require( "readline-sync" );

let number = parseInt(input.question( "enter a number to show multiplication table: " )
);

for( let i =1; i <= 10; i++ ) {
    console.log( `${ i } x ${number}  = ${i * number}`  );
};

