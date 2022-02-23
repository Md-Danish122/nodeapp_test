var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello world i am Danish" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "you can do it" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, work Danish!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
