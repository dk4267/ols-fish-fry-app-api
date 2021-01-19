const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
require('./models/Item');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
require('dotenv').config();

app.use(bodyParser.json());
app.use(userRoutes);
app.use(itemRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => {
    console.log('connected to db');
});

mongoose.connection.on('error', (err) => {
    console.error('error connecting to db: ', err);
});

app.get('/', (req, res) => {
    res.send('successful get request');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});