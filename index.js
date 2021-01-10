let express = require('express');
let Chance = require('chance');
let app = express();
let chance = new Chance();
let backPoints = [];

// req is browser to server respons is server to browser
app.get('/hello/:name', function(req, res, next){
    res.send('hello ' + req.params.name);
});

app.get('/api/v1/back-points', function(req, res, next){

    backPoints.push({
        rest: chance.integer({min: 1000, max: 2500,}),
        healthy:chance.integer(),
        dailyActivity:chance.integer(),
        steps:chance.integer(),
        day: new Date(),
    });
    
    res.json(backPoints);

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

