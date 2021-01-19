const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String
    },
    time: {
        type: Date
    },
    items: {
        
    }
})