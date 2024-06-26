const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
      },
     
     updatedAt: {
        type: Date,
        default: Date.now,
     },
}

);

module.exports = mongoose.model('ToDo', todoSchema);

