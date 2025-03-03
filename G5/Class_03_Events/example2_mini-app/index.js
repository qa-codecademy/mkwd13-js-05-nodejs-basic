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
const skZoo = new Zoo();
const btZoo = new Zoo();

skZoo.addAnimal(lion);
skZoo.addAnimal(monkey);
skZoo.addAnimal(elephant);

setInterval(() => {
	const animals = [lion, monkey, elephant];
	const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

	const actions = ['roar', 'eat', 'sleep', 'play'];
	const randomAction = actions[Math.floor(Math.random() * actions.length)];

	randomAnimal.doAction(randomAction);
}, 2000);

// console.log(theZoo);
// skZoo.addAnimal(lion);
// btZoo.addAnimal(monkey);
// console.log(skZoo);
// console.log(lion);

// skZoo.emit('animal:roar', lion);
// lion.doAction('roar');
// monkey.doAction('eat');

// EXAMPLE FOR INHERITANCE - UNRELATED TO APP AND CODE ABOVE THIS LINe
// class Vehicle {
// 	drive() {
// 		console.log('vehicle is driving');
// 	}
// }

// const vehicle1 = new Vehicle();
// vehicle1.drive();

// class Car extends Vehicle {
// 	constructor() {
// 		super();
// 	}

// 	playingMusic() {
// 		console.log('Car is playing music on the radio');
// 	}
// }

// const car1 = new Car();
// car1.playingMusic();
// car1.drive();

// vehicle1.playingMusic();
