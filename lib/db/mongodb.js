const MongodbClient = require('mongodb').MongoClient;
const { promisify } = require('util');

class Mongodb {
	constructor(options) {
		this._options = options;
		this._client = null;
	}

	async connect() {
		this._client = await promisify(MongodbClient).connect(this._options.url);

		return { ...this._client, seed: this._seed.bind(this) };
	}

	async _seed(items) {
		const { db: dbName, table } = this._options;
		const db = this._client.db(dbName);

		const bulk = db.collection(table).initializeUnorderedBulkOp();

		for (let i = 0; i < items.length; i += 1) {
			bulk.insert(items[i]);
		}

		// execute all stacked commands
		return bulk.execute();
	}
}

module.exports = Mongodb;
