export default class Animal {
	constructor(name) {
		this.name = name;
		this.zoo = null;
	}

	setZoo(zoo) {
		this.zoo = zoo;
	}

	doAction(action) {
		if (this.zoo) {
			this.zoo.emit(`animal:${action}`, this);
		}
	}
}
