const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Database connected'));

module.exports = mongoose;