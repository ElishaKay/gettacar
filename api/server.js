const express = require('express');
const morgan = require('morgan')
const path = require('path');
const mongoose = require('mongoose')

require('dotenv').config()

const app = express(),
      bodyParser = require("body-parser");
      port = 3080;
const carRoutes = require('./routes/cars');

mongoose
    .connect(process.env.MONGO_DEV, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
    .then(() => true)
    .catch(err => {
        console.log(err);
    });

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.use('/api', carRoutes);

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});