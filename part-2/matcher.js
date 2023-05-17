const Participant = require("./participant");

module.exports = class Matcher {
	constructor(participants) {
		this.participants = [...participants];
	}
	getFemales() {
		let females = [];
		this.participants.forEach((el) => {
			if (el.gender === "female") {
				females.push(el);
			}
		});
		return females;
	}
	getMales() {
		let males = [];
		this.participants.forEach((el) => {
			if (el.gender === "male") {
				males.push(el);
			}
		});
		return males;
	}
	generatePairs() {
		let pairs = [];
		for (let i = 0; i < this.participants.length; i++) {
			for (let j = i; j < this.participants.length; j++) {
				if (i != j && this.participants[i].gender != this.participants[j].gender) {
					let pair = [];
					pair.push(this.participants[i]);
					pair.push(this.participants[j]);
					pairs.push(pair);
				}
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
