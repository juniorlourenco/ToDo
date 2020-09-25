const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/todo';
mongoose.connect(process.env.DATABASE_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Database connected'));

app.use(express.json());

module.exports = mongoose;