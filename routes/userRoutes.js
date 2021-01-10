const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const router = express.Router();

router.post('/signup', async(req, res) => {
    const { username, password } = req.body;

    try {
        const user = new User({ username, password });
        await user.save();

        res.send({ user });
    } catch (err) {
        return res.status(422).send(err.message);

    }
})

router.post('/signin', async(req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(422).send({error: 'Must provide email and password'});
    }

    const user = await User.findOne({ username });
    if (!user) {
        return res.status(422).send({error: 'Invalid username'});
    }

    try {
        await user.comparePassword(password);
        res.send({user});
        
    } catch (err) {
        return res.status(422).send({error: 'Invalid password'});
    }
})

module.exports = router;