class Main {
    constructor() {
        this.main();
    }
    main() {
        let input = require("readline-sync");
        let arr = [];
        let limit = parseInt(input.question("enter the length of your 2d array: "));
        arr = this.getArray(limit, input);
        this.displayArray(arr);
    }
    getArray(limit, input) {
        let arr = [];
        let temp = [];
        for (let i = 0; i < limit; i++) {
            for (let j = 0; j < limit; j++) {
                temp.push(
                    parseInt(
                        input.question(`enter arr[${i}][${j}]th position value:`)
                    )
                )
            };
            arr.push(temp);
            temp = [];
        }
        return arr;
    }

    displayArray(arr) {
        console.log(arr);
    }
}

let obj1 = new Main();