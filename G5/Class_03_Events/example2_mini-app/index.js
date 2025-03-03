import Animal from './animal.js';
import Zoo from './zoo.js';

// Create some animals
const lion = new Animal('Leo the kind');
const monkey = new Animal('George the monkey');
const elephant = new Animal('Dumbo the Elephant');

// console.log(lion);
// console.log(monkey);
// console.log(elephant);

// Create a zoo
const theZoo = new Zoo();

// console.log(theZoo);

// theZoo.addAnimal(lion);
// console.log(theZoo);

// theZoo.emit('animal:roar', lion);

class Vehicle {
	drive() {
		console.log('vehicle is driving');
	}
}

const vehicle1 = new Vehicle();
vehicle1.drive();

class Car extends Vehicle {
	constructor() {
		super();
	}

	playingMusic() {
		console.log('Car is playing music on the radio');
	}
}

const car1 = new Car();
car1.playingMusic();
car1.drive();

vehicle1.playingMusic();
