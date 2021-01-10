let express = require('express');
let app = express();
let bpContents = require('./lib/bpContents');

// req is browser to server respons is server to browser
app.get('/hello/:name', function(req, res, next){
    res.send('hello ' + req.params.name);
});

app.get('/api/v1/back-points', function(req, res, next){

    bpContents.createNewEntry();
    
    res.json(bpContents.getEntries());

});

app.get('/', function(req, res, next){
    res.send('<html><body><a href="/hello/john">Go to here</a></body></html>');
});

app.listen(3000, function(err){
    if(!err) {
        console.log('server listening on http://localhost:3000');
    } else {
        console.error(err);
    }
});

module.exports = app;