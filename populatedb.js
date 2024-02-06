console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
// const userArgs = process.argv.slice(2);

const mongoose = require('mongoose');
const Items = require('./models/items');
const Category = require('./models/categories');

// const items = [];
// const category = [];

// const { promises } = require('dns');
// mongoose.set('strictQuery', false);

const mongoDB =
  'mongodb+srv://elibonner:XHKIecdztNkOc4IQ@inventory.o9clldo.mongodb.net/?retryWrites=true&w=majority';

// const mongoDB = userArgs[0];

// main().catch(err => console.log(err));

// async function main() {
//   console.log('Debug: About to connect');
//   await mongoose.connect(mongoDB);
//   console.log('Debug: Should be connected?');
//   await createItems();
//   await createCategory();

//   console.log('Debug: Closing mongoose');
//   mongoose.connection.close();
// }
async function main() {
  console.log('Connecting to MongoDB...');
  await mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB');
  await createCategories();
  await createItems();

  // Close the MongoDB connection
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
}

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.

// async function itemCreate(
//   index,
//   name,
//   description,
//   price,
//   category,
//   numberInInventory,
//   url
// ) {
//   const items = new Item({
//     name: name,
//     description: description,
//     price: price,
//     category: category,
//     numberInInventory: numberInInventory,
//     url: url,
//   });
//   await item.save();
//   items[index] = item;
//   console.log(`Added item: ${name}`);
// }

async function createCategories() {
  console.log('Adding categories');
  await Promise.all([
    categoryCreate(0, 'Cpu'),
    categoryCreate(1, 'Gpu'),
    categoryCreate(2, 'Storage'),
    categoryCreate(3, 'Memory'),
  ]);
}

async function createItems() {
  console.log('adding items');
  await Promise.all([
    itemCreate(
      0,
      'i9 13900k',
      'intels leading processor',
      '700',
      category[0],
      numberInInventory[14]
    ),
    itemCreate(
      1,
      'i9 12900K',
      'intels leading processor from last year',
      '590',
      category[0],
      numberInInventory[16]
    ),
    itemCreate(
      2,
      'i7 13700K',
      'intels latest midrange processor',
      '410',
      category[0],
      numberInInventory[24]
    ),
    itemCreate(
      3,
      'i5 13600K',
      'intels latest lowend processor',
      '320',
      category[0],
      numberInInventory[8]
    ),
    itemCreate(
      4,
      'i5 12600K',
      'intels last year i5 processor',
      '700',
      category[0],
      numberInInventory[10]
    ),

    itemCreate(
      5,
      'GeForce RTX 4070',
      'nvidias latest midrange graphics card',
      '700',
      category[0],
      numberInInventory[10]
    ),
    itemCreate(
      6,
      'GeForce RTX 4080 Super',
      'nvidia latest and greatest processor',
      '900',
      category[1],
      numberInInventory[2]
    ),

    itemCreate(
      7,
      'samsung m.ssd 2tb',
      'samsungs ssd card for m. compatible motherboards',
      '110',
      category[2],
      numberInInventory[36]
    ),
    itemCreate(
      8,
      'sata storage 6tb',
      'a faster storage than the  old gen storages, cheaper for more memory',
      '90',
      category[2],
      numberInInventory[12]
    ),
    itemCreate(
      9,
      'hard disk drive 2tb',
      'some of the oldest still used type of storage',
      '68',
      category[2],
      numberInInventory[7]
    ),

    itemCreate(
      10,
      '32gb dual card RAM',
      'uses two sep. cards to split usage up to be more efficent',
      '70',
      category[3],
      numberInInventory[34]
    ),
    itemCreate(
      11,
      '8gb sigle card RAM',
      'cheaper and has one stick but is still efficent to get most tasks done',
      '40',
      category[3],
      numberInInventory[8]
    ),
  ]);
}

async function categoryCreate(name) {
  const category = new Category({ name });
  await category.save();
  console.log(`Added category: ${name}`);
}

async function itemCreate(
  name,
  description,
  price,
  category,
  numberInInventory
) {
  const item = new Item({
    name,
    description,
    price,
    category,
    numberInInventory,
  });
  await item.save();
  console.log(`Added item: ${name}`);
}

main().catch(err => console.error(err));
