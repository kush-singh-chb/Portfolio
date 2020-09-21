var express = require('express');
var app = express();
var path    = require('path');
app.set('view engine', 'ejs');
app.use(express.static(__dirname +path.sep+ 'js'));

app.get('/', function (req, res) {
    res.render('pages/index');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});