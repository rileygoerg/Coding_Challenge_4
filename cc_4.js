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
        console.log("The ", this.make, "braked. Current speed: ", this.speed, "km/h");
    }
}