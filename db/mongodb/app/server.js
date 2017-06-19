const join = require("path").join;
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
var mongodb;
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});
app.post('/tasks', (req, res) => {
    mongodb.collection('tasks').save(req.body, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log('task saved to database');
            res.redirect('/');
        }
    });
});
MongoClient.connect('mongodb://localhost/mydata', (err, database) => {
    if (err) {
        console.log(err);
    } else {
        mongodb = database;
        app.listen(3000, () => {
            console.log('listening on 3000');
        });
    }
});


