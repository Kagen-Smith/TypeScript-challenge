// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    // Create a constructor that accepts the properties of the Truck class
    // The constructor should call the constructor of the parent class, Vehicle
    // The constructor should initialize the properties of the Truck class
    // The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        // Call the constructor of the parent class, Vehicle
        super();
        // Initialize properties of the Truck class
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // Check if the wheels array has 4 elements
        // If not, create 4 new Wheel objects
        // Otherwise, use the provided wheels array
        if (!wheels || wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
        this.towingCapacity = towingCapacity;
    }
    // Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        // console.log(vehicle);
        // Get the make an model of the vehicle if it exists
        if (vehicle && vehicle.make && vehicle.model) {
            const { make, model } = vehicle;
            // Check if the vehicle's weight is less than or equal to the truck's towing capacity
            if (vehicle.weight <= this.towingCapacity) {
                // If it is, log that the vehicle is being towed
                console.log(`${make} ${model} is being towed`);
                // If it is not, log that the vehicle is too heavy to be towed
            }
            else {
                console.log(`${make} ${model} is too heavy to be towed`);
            }
        }
        else {
            console.log('Vehicle information is missing');
        }
    }
    // Override the printDetails method from the Vehicle class
    // The method should call the printDetails method of the parent class
    // The method should log the details of the Truck
    // The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    printDetails() {
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        this.wheels.forEach((wheel, index) => {
            console.log(`Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`);
        });
        console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    }
}
// Export the Truck class as the default export
export default Truck;
