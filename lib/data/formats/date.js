class DateType {
	constructor(generator) {
		this._generator = generator;
	}

	createdAt() {
		return new Date();
	}

	updatedAt() {
		return new Date();
	}
}

module.exports = DateType;