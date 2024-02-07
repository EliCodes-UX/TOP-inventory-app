console.log(
  'This script populates some test items and categories to the mongodb database'
);

// Get arguments passed on command line

const mongoose = require('mongoose');
const Item = require('./models/items');
const Category = require('./models/categories');
const categories = require('./models/categories');

const numberInInventory = [];
// const Items = [];
// const category = [];

const mongoDB =
  'mongodb+srv://elibonner:XHKIecdztNkOc4IQ@inventory.o9clldo.mongodb.net/?retryWrites=true&w=majority';

async function main() {
  console.log('Connecting to MongoDB...');
  await mongoose.connect(mongoDB, {});
  console.log('Connected to MongoDB');
  await createCategories();
  await createItems(categories);
  // Close the MongoDB connection
  await mongoose.connection.close();
  console.log('MongoDB connection closed');
}

async function createCategories() {
  console.log('Adding categories');
  const catagoriesData = [
    { index: 0, name: 'Cpu', description: 'Central Processing Units' },
    { index: 1, name: 'Gpu', description: 'Graphics Processing Units' },
    { index: 2, name: 'Storage', description: 'Storage units' },
    { index: 3, name: 'Memory', description: 'Memory units' },
  ];
  for (const data of catagoriesData) {
    await categoryCreate(data.index, data.name, data.description);
  }
}

async function createItems(categories) {
  console.log('adding items');
  await Promise.all([
    itemCreate(
      0,
      'i9 13900k',
      'intels leading processor',
      700,
      categories[0],
      numberInInventory[14]
    ),
    itemCreate(
      1,
      'i9 12900K',
      'intels leading processor from last year',
      590,
      categories[0],
      numberInInventory[16]
    ),
    itemCreate(
      2,
      'i7 13700K',
      'intels latest midrange processor',
      410,
      categories[0],
      numberInInventory[24]
    ),
    itemCreate(
      3,
      'i5 13600K',
      'intels latest lowend processor',
      320,
      categories[0],
      numberInInventory[8]
    ),
    itemCreate(
      4,
      'i5 12600K',
      'intels last year i5 processor',
      219,
      categories[0],
      numberInInventory[10]
    ),

    itemCreate(
      5,
      'GeForce RTX 4070',
      'nvidias latest midrange graphics card',
      1200,
      categories[0],
      numberInInventory[10]
    ),
    itemCreate(
      6,
      'GeForce RTX 4080 Super',
      'nvidia latest and greatest processor',
      900,
      categories[1],
      numberInInventory[2]
    ),

    itemCreate(
      7,
      'samsung m.ssd 2tb',
      'samsungs ssd card for m. compatible motherboards',
      110,
      categories[2],
      numberInInventory[36]
    ),
    itemCreate(
      8,
      'sata storage 6tb',
      'a faster storage than the  old gen storages, cheaper for more memory',
      90,
      categories[2],
      numberInInventory[12]
    ),
    itemCreate(
      9,
      'hard disk drive 2tb',
      'some of the oldest still used type of storage',
      68,
      categories[2],
      numberInInventory[7]
    ),

    itemCreate(
      10,
      '32gb dual card RAM',
      'uses two sep. cards to split usage up to be more efficent',
      70,
      categories[3],
      numberInInventory[34]
    ),
    itemCreate(
      11,
      '8gb sigle card RAM',
      'cheaper and has one stick but is still efficent to get most tasks done',
      40,
      categories[3],
      numberInInventory[8]
    ),
  ]);
}

async function categoryCreate(index, name, description) {
  const category = new Category({ index, name, description });
  try {
    await category.save();
    console.log(`Added category: ${name}`);
  } catch (error) {
    console.error(`Error adding category ${name}: ${error.message}`);
  }
}

async function itemCreate(
  index,
  name,
  description,
  price,
  category,
  numberInInventory
) {
  const item = new Item({
    index,
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
