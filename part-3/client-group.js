const PersonGroup = require("./person-group");

module.exports = class ClientGroup extends PersonGroup {
	constructor(clients) {
		super(clients);
	}
	get clients() {
		return this.persons;
	}
};
