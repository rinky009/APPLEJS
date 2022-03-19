const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    console.log(`Server running on port ${port}`)
    res.send('Hello World')
});
