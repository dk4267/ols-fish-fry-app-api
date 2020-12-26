const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

mongoUri = 'mongodb+srv://dkirchner4267:Damk1232@cluster0.xl4pp.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true })

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