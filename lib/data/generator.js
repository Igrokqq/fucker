const { Chance } = require('chance');
const StringFormat = require('./formats/string');
const NumberFormat = require('./formats/number');
const BooleanFormat = require('./formats/boolean');
const DateFormat = require('./formats/date');

class Generator {
	constructor(schema, count = 1) {
		if (!(schema instanceof Object)) {
			throw new Error('The provided schema must be object');
		}
		this._generator = new Chance();

		this._schema = schema;
		this._count = count;
	}

	_generateFieldValue({ type, formatType }) {
		if (type === 'string') {
			const format = new StringFormat(this._generator);
			return format[formatType] ? format[formatType]() : null;
		}
		if (type === 'number') {
			const format = new NumberFormat(this._generator);
			return format[formatType] ? format[formatType]() : null;
		}
		if (type === 'boolean') {
			const format = new BooleanFormat(this._generator);
			return format[formatType] ? format[formatType]() : null;
		}
		if (type === 'date') {
			const format = new DateFormat(this._generator);
			return format[formatType] ? format[formatType]() : null;
		}

	}

	generate() {
		const outputItems = [];

		for (let i = 0; i < this._count; i++) {
			const generatedItem = {};

			Object.entries(this._schema).forEach(([fieldName, options]) => {
				if (options.type && options.formatType) {
					generatedItem[fieldName] = this._generateFieldValue(options);
				}
			});

			outputItems.push(generatedItem);
		}

		return outputItems;
	}
}

module.exports = Generator;