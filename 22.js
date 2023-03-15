main();
function main() {
    let input = require("readline-sync");
    let array1 = [];
    let array2 = [];
    let row = parseInt(input.question("enter the row of array: "));
    let col = parseInt(input.question("enter the colum of array: "));
    console.log("enter the elements to array 1: ");
    array1 = getArray(row, col, input);
    console.log("enter the elements to array 2: ");
    array2 = getArray(row, col, input);
    let addedArray = [];
    addedArray = addArray(array1, array2, row, col);
    displayArray(addedArray);
}

function getArray(row, col, input) {
    let arr = [];
    let temp = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            temp[j] = parseInt(input.question(`enter arr[${i}][${j}] th element: `));
        }
        arr.push(temp);
        temp = [];
    }
    return arr;
}

function addArray(array1, array2, row, col) {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            array1[i][j] += array2[i][j];
        }
    }
    return array1;
}

function displayArray(arr) {
    console.log(arr);
}