module.exports = class SalesmanGroup {
	constructor(salesmen) {
		this.salesmen = salesmen;
	}
	getFios() {
		let fios = [];
		this.salesmen.forEach((el) => {
			fios.push(`${el.firstName} ${el.middleName} ${el.lastName}`);
		});
		return fios.join(", ");
	}
};
