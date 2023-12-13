// server.js

const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', (req, res) => {
    let randomNumber = req.cookies.randomNumber;

    if (!randomNumber) {
        randomNumber = Math.floor(Math.random() * 10) + 1;
        res.cookie('randomNumber', randomNumber, { maxAge: 365 * 24 * 60 * 60 * 1000 }); // 365日間クッキーを保持
    }

    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});