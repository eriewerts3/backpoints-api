let express = require('express');
let app = express();
const bp = require('./controllers/api/v1/back-points');

bp.registerEndpoints(app);

app.listen(3000, function(err){
    if(!err) {
        console.log('server listening on http://localhost:3000');
    } else {
        console.error(err);
    }
});

module.exports = app;