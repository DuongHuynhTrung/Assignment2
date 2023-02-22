const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
async function connectToDb() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/worldcup2022');
    console.log('Connected to database');
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDb;
