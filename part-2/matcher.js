module.exports = class Matcher {
	constructor(participants) {
		this.participants = [...participants];
	}
	getFemales() {
		let females = this.participants.filter((el) => el.gender === "female");
		return females;
	}
	getMales() {
		let males = this.participants.filter((el) => el.gender === "male");
		return males;
	}
	generatePairs() {
		const pairs = [];
		const women = this.getFemales();
		const men = this.getMales();
		for (let elem of women) {
			for (let el of men) {
				let pair = [];
				pair.push(elem);
				pair.push(el);
				pairs.push(pair);
			}
		}
		return pairs;
	}
	addLike(who, whom) {
		if (who.hasOwnProperty("getLikes") === false) {
			who.getLikes = [];
			who.getLikes.push(whom);
		} else {
			who.getLikes.push(whom);
		}
		if (whom.hasOwnProperty("hasLikesFrom") === false) {
			whom.hasLikesFrom = [];
			whom.hasLikesFrom.push(who);
		} else {
			whom.hasLikesFrom.push(who);
		}
	}
	getLikes(who) {
		return who.getLikes;
	}
	whoLikes(who) {
		return who.hasLikesFrom;
	}
};
