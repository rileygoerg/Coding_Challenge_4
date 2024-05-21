// U14123683 Riley Goerg
class Car {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }
    // Part 2: Accelerate Function. Adds 10 km/h to current car speed
    accelerate(){
        this.speed += 10;
        console.log("The ", this.make, "accelerated. Current speed: ", this.speed, "km/h");
    }
    // Part 3: Brake Function. Removes 5 km/h from current car speed
    brake(){
        this.speed -= 5;
        console.log("The", this.make, "braked. Current speed:", this.speed, "km/h");
    }
}
// Part 1: Extending Car Class with EV Class
class EV extends Car{
    constructor(make, speed, charge){ // Adding charge property to represent EV battery charge level
        super(make, speed); // Pulling make and speed from parent Car class
        this.charge = charge;
        this.initialSpeed = speed // Storing initial speed
    }
    // Part 2: Implementing chargeBattery method
    chargeBattery(chargeTo){ // Ex: chargeBattery(50)
        this.charge = chargeTo; // Sets charge to chargeTo input
    }
    // Part 3: Customize Accelerate Method to increase speed by 20 and decrease charge by 1%
    accelerate(){
        if(this.charge > 0){ // Ensuring charge is above 0 with if/else statement
            this.speed += 20; 
            this.charge -= 1; // If charge is above 0, decrease charge by 1 when accelerating.
            console.log(this.make, "accelerated. Current speed:", this.speed, "km/h with a charge of", this.charge, "%.");
        }
        else { // If charge is 0, do not allow car to accelerate
            console.log(this.make, "cannot accelerate. The battery must be charged.");
            this.speed = this.initialSpeed; // Resetting speed to initial speed if out of battery
            console.log("Speed of", this.make, "was reset to", this.speed, "km/h from running out of battery.")
        }
    }
}
// Part 4: Testing EV Class
// Creating New EV
const tesla = new EV("Tesla", 120, 23) // Creating a tesla with a speed of 120km/h and a charge of 23%.

// Testing chargeBattery function
tesla.chargeBattery(50); // Charging to 50
console.log(tesla.make, "was charged to", tesla.charge, "%.");

// Testing overridden accelerate function
tesla.accelerate();

// Testing accelerate function at 0 charge
tesla.chargeBattery(0);
console.log(tesla.make, "charge was set to", tesla.charge, "%.");
tesla.accelerate();

// Charging tesla and testing accelerate and brake function
tesla.chargeBattery(23);
console.log(tesla.make, "was charged to", tesla.charge, "%.");
tesla.accelerate();
tesla.brake();





