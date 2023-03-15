function Car( name, mileage, maxSpeed ) {
    this.name = name;
    this.mileage = mileage;
    this.maxSpeed = maxSpeed;
    console.log( this.name, this.mileage, this.maxSpeed );
}

let obj1 = new Car( "BMW", 8, 600 );