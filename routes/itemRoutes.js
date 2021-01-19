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

router.put('/items/:id', async (req, res) => {
    try {        
        const result = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true, useFindAndModify: false});
        res.send(result);
    } catch (err) {
        return res.status(422).send(err);
    }
})

router.delete('/items/:id', async (req, res) => {
    try {
        await Item.findByIdAndRemove(req.params.id);
        res.send("item deleted");
    } catch (err) {
        return res.status(422).send(err);
    }
})

module.exports = router;