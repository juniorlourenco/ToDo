const mongoose = require('../config/database');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    macadress: {type: String, required: true},
    type: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    when: {type: Date, required: true},
});