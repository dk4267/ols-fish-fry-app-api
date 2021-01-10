const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        unique: true
    },
    category: {
        type: String
    },
    price: {
        type: Number
    }
});

mongoose.model('Item', itemSchema);