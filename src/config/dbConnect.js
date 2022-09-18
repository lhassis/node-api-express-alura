const mongoose = require('mongoose');

const password = process.env.DB_PASSWORD;
console.log({password})
mongoose.connect(`mongodb+srv://admin-express:${password}@node-express.dlezh1e.mongodb.net/?retryWrites=true&w=majority`);

let db = mongoose.connection;

module.exports = db;