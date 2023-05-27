const PersonGroup = require("./person-group");
module.exports = class SalesmanGroup extends PersonGroup {
	constructor(salesmen) {
		this.salesmen = salesmen;
	}
	get salesmen() {
		return this.persons;
	}
};
