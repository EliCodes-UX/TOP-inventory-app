console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Items = require('./models/items');
const Category = require('./models/category');

const items = [];
const category = [];

const mongoose = require('mongoose');
const { promises } = require('dns');
mongoose.set('strictQuery', false);

const mongoDB = userArgs[0];

main().catch(err => console.log(err));

async function main() {
  console.log('Debug: About to connect');
  await mongoose.connect(mongoDB);
  console.log('Debug: Should be connected?');
  await createItems();
  await createCategory();

  console.log('Debug: Closing mongoose');
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function itemCreate(
  index,
  name,
  description,
  price,
  category,
  numberInInventory,
  url
) {
  const items = new Item({
    name: name,
    description: description,
    price: price,
    category: category,
    numberInInventory: numberInInventory,
    url: url,
  });
  await item.save();
  genres[index] = item;
  console.log(`Added item: ${name}`);
}

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
  await promise.all({
    itemCreate(
    itemCreate(0, 'i9 13900k', 'intels leading processor', '700', categories[0], numberInInventory[14]),
    )
  });
}
