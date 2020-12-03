class Boolean {
	constructor(generator) {
		this._generator = generator;
	}

	bool() {
		return this._generator.bool();
	}
}

module.exports = Boolean;