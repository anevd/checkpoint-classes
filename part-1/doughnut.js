module.exports = class Doughnut {
	constructor({ name = "Пышка" }, stuffings = []) {
		this.name = name;
		this.baseWeight = 60;
		this.stuffings = stuffings;
	}
	get weight() {
		let stuffingsWeight = this.stuffings.reduce((acc, cur) => acc + cur.weight, 0);
		return this.baseWeight + stuffingsWeight;
	}
};
