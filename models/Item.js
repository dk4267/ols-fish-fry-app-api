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
    },
    sides: {
        type: Array, 
        required: false
    }
});

mongoose.model('Item', itemSchema);