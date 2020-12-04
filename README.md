# Fucker

## Features 

### Supported Databases
- Mongodb

## Requirements

- node >= 12
- npm >= 6

## Installation
``` 
npm i -g fucker
```

## Quick Start 
----
```
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
```

## Supported Data Formats 
* String 
  * fullName
  * country
  * string
  * password
  * firstName
  * lastName
  * text
  * ip 
  * animal 
  * gender
  * hashTag
  * company
  * profession
  * twitter
  * domain
  * city 
  * coordinates 
  * country
  * depth 
  * latitude 
  * longitude
  * locale
  * phone 
  * state 
  * street 
  * zip
  * dollar 
  * euro
  * capitalize
  * address 
  * avatar 
  * email
* Number
  * integer
  * age
* Date 
  * createdAt
  * updatedAt
* Boolean
  * bool

## Performance
```
chunk: 465.751ms
#89 chunkSize 10000
chunk: 477.125ms
#90 chunkSize 10000
chunk: 481.214ms
#91 chunkSize 10000
chunk: 405.254ms
#92 chunkSize 10000
chunk: 483.662ms
#93 chunkSize 10000
chunk: 472.695ms
#94 chunkSize 10000
chunk: 418.262ms
#95 chunkSize 10000
chunk: 481.651ms
#96 chunkSize 10000
chunk: 464.24ms
#97 chunkSize 10000
chunk: 450.937ms
#98 chunkSize 10000
chunk: 464.019ms
#99 chunkSize 10000
chunk: 591.889ms
generate items start: 51.070s
 ```