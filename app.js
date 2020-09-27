const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
const publicDir = path.join(__dirname, '/public');
app.use(express.static(publicDir));
app.get('/', function (req, res) {
    res.render('pages/index');
});
app.post('/contactForm', function (req, res) {
console.log('received form details')
    res.render('pages/index');
});
app.listen(8080, function () {
    console.log('Example app listening on port 3000!');
});