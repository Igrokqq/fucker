class Number {
	constructor(generator) {
		this._generator = generator;
	}

	integer(min, max) {
		return this._generator.integer({ min, max });
	}

	age(min = 1, max = 200) {
		return this._generator.integer({ min, max });
	}
}

module.exports = Number;