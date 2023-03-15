my_height = 200;
tiny_height = 40;
let input = require("readline-sync");

try {
    let height = parseInt(input.question("enter your height: "));
    if (isNaN(height)) {
        throw 'notANumber'
    } else if (height > my_height) {
        throw 'huge Height'
    } else if (height < tiny_height) {
        throw 'tiny Height'
    } else {
        console.log("valid");
    }
} catch (err) {
    console.log(err)
}