const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const app = express();
const mockAPIResponse = require('./mockAPI.js');
//:::::::::::::::::::::::::::::

app.use(express.static('dist'));
// console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

const port = 8080;
app.listen(port, function () {
    console.log('Example app listening on port 8080!');
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})

app.post('/meaningCloud', function (req, res) {
  // console.log(`${process.env.API_KEY}`)
  // console.log(typeof `${process.env.API_KEY}`)
    res.send(`${process.env.API_KEY}`); // send the API_KEY
    res.end()
})