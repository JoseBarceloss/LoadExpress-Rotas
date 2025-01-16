const express = require('express');
const path = require('path');
const app = express(); 

const port = 5000;

const basePath = path.join(__dirname, 'templates')

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

app.use(express.static('public'))

const homeRoute = require('./routes/home');

app.use('/', homeRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});