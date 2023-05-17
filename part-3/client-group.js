module.exports = class ClientGroup {
	constructor(clients) {
		this.clients = [...clients];
	}
	getFios() {
		let fios = [];
		this.clients.forEach((el) => {
			fios.push(`${el.firstName} ${el.middleName} ${el.lastName}`);
		});
		return fios.join(", ");
	}
};
