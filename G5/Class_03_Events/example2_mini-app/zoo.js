import { EventEmitter } from 'events';

export default class Zoo extends EventEmitter {
	constructor() {
		super();
		this.animals = [];

		// Events
		this.on('animal:roar', (animal) => {
			console.log(
				`Zoo Alert: ${animal.name} ir roaring! Other animals are getting scared!`
			);
		});
	}

	addAnimal(animal) {
		this.animals.push(animal);
		console.log(`${animal.name} has been added to the zoo!`);
	}
}


