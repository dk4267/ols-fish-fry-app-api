const express = require('express');
const mongoose = require('mongoose');
const Item = mongoose.model('Item');

const router = express.Router();

router.get('/items', async (req, res) => {
    const items = await Item.find({});
    res.send(items);
})

router.post('/items', async (req, res) => {
    const { itemName, category, price } = req.body;
    if (!itemName || !category || !price) {
        return res.status(422).send('error: all information must be provided');
    }
    try {
        const item = new Item({ itemName, category, price });
        await item.save();
        res.send(item);
    } catch (err) {
        return res.status(422).send('error adding item');
    }
})

module.exports = router;