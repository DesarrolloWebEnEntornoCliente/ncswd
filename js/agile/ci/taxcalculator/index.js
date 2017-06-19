var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function(request, response) {
    response.render('index');
});
app.listen(port, function() {
    console.log('The app is running on port: ' + port);
});
