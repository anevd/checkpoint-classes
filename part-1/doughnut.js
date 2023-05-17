const Stuffing = require("./stuffing");

module.exports = class Doughnut {
	constructor({ name = "Пышка" }, stuffings = []) {
		this.name = name;
		this.baseWeight = 60;
		this.stuffings = stuffings;
	}
	get weight() {
		let stuffingsWeight = this.stuffings.map((el) => el.weight);
		let weight = this.baseWeight;
		stuffingsWeight.forEach((el) => (weight += el));
		return weight;
	}
};
