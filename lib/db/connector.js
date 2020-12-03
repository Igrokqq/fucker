const Mongodb = require('./mongodb');
const constants = require('./constants');

module.exports = (config) => {
	const type = config.type.toLowerCase();

	if (type === constants.MONGODB) {
		return new Mongodb(config.options || {});
	}

	throw new Error('The taken db is not supported for now');
}