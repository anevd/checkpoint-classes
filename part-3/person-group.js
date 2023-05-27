module.exports = class PersonGroup {
	constructor(persons) {
		this.persons = persons;
	}
	getFios() {
		let fios = [];
		this.persons.forEach((el) => {
			fios.push(`${el.firstName} ${el.middleName} ${el.lastName}`);
		});
		return fios.join(", ");
	}
};
