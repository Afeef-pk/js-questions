class Aria {
    input = require("readline-sync");
    circle() {
        let radius = this.input.question("enter the radius: ");
        let aria = (3.14 * radius) * radius
        console.log(`result is: ${aria}`);
    }
    squire() {
        let length = this.input.question("enter the length: ");
        let aria = length * length;
        console.log(`aria is: ${aria}`);
    }
    rectangle() {
        let length = this.input.question("enter the width: ");
        let height = this.input.question("enter the height: ");
        console.log(`aria is: ${length * height}`);
    }
    triangle() {
        let base = this.input.question("enter the base: ");
        let height = this.input.question("enter the height: ");
        console.log(`aria is: ${1 / 2 * base * height}`);
    }
}
class MyClass extends Aria {
    main() {
        let input = require("readline-sync");
        let choice = parseInt(
            input.question(
                `Enter your choice:\n\t\t1. Circle\n\t\t2. Squire\n\t\t3. Rectangle\n\t\t4. Triangle\n`
            )
        )
        switch (choice) {
            case 1:
                this.circle();
                break;
            case 2:
                this.squire();
                break;
            case 3:
                this.rectangle();
                break;
            case 4:
                this.triangle();
                break;
            default:
                console.log("invalid choice! try again.");
        }
    }
    circle() {
        super.circle();
    }
    squire() {
        super.squire();
    }
    rectangle() {
        super.rectangle();
    }
    triangle() {
        super.triangle();
    }
}
let obj1 = new MyClass();
obj1.main();