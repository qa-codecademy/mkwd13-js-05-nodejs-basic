import { EventEmitter } from 'events';

export default class Zoo extends EventEmitter {
	constructor() {
		super();
		this.animals = [];

		// Events
		this.on('animal:roar', animal => {
			console.log(
				`Zoo Alert: ${animal.name} is roaring! Other animals are getting scared!`
			);
		});

		this.on('animal:eat', animal => {
			console.log(`Zoo Alert: ${animal.name} is having a their meal.`);
		});

		this.on('animal:sleep', animal => {
			console.log(`Zoo Alert: ${animal.name} is taking a nap. Shhhhhh!`);
		});

		this.on('animal:play', animal => {
			console.log(`Zoo Alert: ${animal.name} is playing around.`);
		});
	}

	addAnimal(animal) {
		this.animals.push(animal);
		animal.setZoo(this);
		console.log(`${animal.name} has been added to the zoo!`);
	}
}
