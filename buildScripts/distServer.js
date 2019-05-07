import express from 'express';
import path from 'path';
import open from 'open';

var port = 3000;
var app = express();

app.use(express.static('dist'));

app.get('/', function(req, resp) {
    resp.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
    res.json([
        { "id": 1, "firstName": "Yunior", "LastName": "Laureano" }
    ]);
});
app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});