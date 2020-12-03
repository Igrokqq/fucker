const { v4: uuidv4 } = require('uuid');

class String {
	constructor(generator) {
		this._generator = generator;
	}

	string(maxLength = 32) {
		return this._generator.string({ length: maxLength });
	}

	fullName() {
		return this._generator.name();
	}

	password() {
		return uuidv4();
	}

	firstName() {
		return this._generator.first();
	}

	lastName() {
		return this._generator.last();
	}

	text(wordsCount = 5) {
		return this._generator.sentence({ words: wordsCount });
	}

	ip() {
		return this._generator.ip();
	}

	animal() {
		return this._generator.animal();
	}

	gender() {
		return this._generator.gender();
	}

	hashTag() {
		return this._generator.hashTag();
	}

	company() {
		return this._generator.company();
	}

	profession() {
		return this._generator.profession();
	}

	twitter() {
		return this._generator.twitter();
	}

	domain() {
		return this._generator.domain();
	}

	city() {
		return this._generator.city();
	}

	coordinates() {
		return this._generator.coordinates();
	}

	country(full = true) {
		return this._generator.country({ full });
	}

	depth(min = 0, fixed = 3) {
		return this._generator.depth({ min, fixed });
	}

	latitude(min = 0, max = 1000, fixed = 2) {
		return this._generator.latitude({ min, max, fixed });
	}

	longitude(min = 0, max = 1000, fixed = 2) {
		return this._generator.longitude({ min, max, fixed });
	}

	locale(region = true) {
		return this._generator.locale({ region });
	}

	phone(country = 'ua', formatted = true) {
		return this._generator.phone({ country, formatted });
	}

	state(full = false, territories = false, country = 'ua') {
		return this._generator.state({ full, territories, country });
	}

	street(shortSuffix = false) {
		return this._generator.street({ short_suffix: shortSuffix });
	}

	zip(plusfour = false) {
		return this._generator.zip({ plusfour });
	}

	dollar(max = 200) {
		return this._generator.dollar({ max });
	}

	euro(max = 200) {
		return this._generator.euro({ max });
	}

	capitalize() {
		return this._generator.capitalize();
	}

	address(shortSuffix = false) {
		return this._generator.address({ short_suffix: shortSuffix });
	}

	avatar(protocol = 'http', fileExtension = 'jpg') {
		return this._generator.avatar({ protocol, fileExtension });
	}

	email() {
		const [email] = this._generator.unique(this._generator.email, 1);

		return email;
	}
}

module.exports = String;