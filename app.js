var bodyParser = require('body-parser');
const express = require('express');
const config = require('./config/config');
const { v4: uuidv4 } = require('uuid');

const AWS = require('aws-sdk');

const app = express();
const path = require('path');

app.set('view engine', 'ejs');

const publicDir = path.join(__dirname, '/public');
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
AWS.config.update(config.aws_remote_config)

app.use(express.static(publicDir));
app.get('/', function (req, res) {
    res.render('pages/index');
});

app.post('/contactForm', function (req, res) {
    res.set('Content-Type', 'text/html');
    const {name, email, message} = req.body;
    const id = uuidv4();
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: config.aws_table_name,
        Item: {
            id: id,
            name: name,
            email: email,
            message: message
        }
    };
    docClient.put(params,function (err,data){
        if (err) {
            res.send({
                success: false,
                message: 'Error: Server error'
            });
        } else {
            console.log('data', data);
            const { Items } = data;
            res.send({
                success: true,
                message: 'Added to Database',
                id: id
            });
        }
    });
    res.redirect('/')
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});