const Fucker = require('../lib');
const schema = require('./schema.json');

async function main() {
  // 1 step -> connect to db
  const options = {
    type: 'mongo',
    options: {
      url: 'mongodb://localhost:27017/app',
      db: 'app',
      table: 'testdata',
    },
  };

  const client = await Fucker.DbConnector(options).connect();

  // 2 step -> generate fake data for seeding them to our database
  const chunkSize = 10000;
  const chunksCount = 100;
  const dataGenerator = new Fucker.DataGenerator(schema, chunkSize);

  // 3 step -> seed you database 
  console.time('generate items start');
  for (let i = 0; i < chunksCount; i += 1) {
    console.time('chunk');
    console.log(`#${i} chunkSize ${chunkSize}`);

    const itemsChunk = dataGenerator.generate();

    await client.seed(itemsChunk);

    console.timeEnd('chunk');
  }
  console.timeEnd('generate items start');

  client.close();
}

main().catch(console.error);