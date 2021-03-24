let BpContents = require('../../../models/back-points');
let BPEntry = require('../../../models/back-points-entry');

let db = new BpContents();

module.exports.registerEndpoints = (router) => {
    // this is the GET in Homework
    router.get('/api/v1/back-points', getBackPoints);
    router.post('/api/v1/back-points', createBackPoints);
};

function createBackPoints(req, res, next){

    // create a new entry
    let entry = new BPEntry(req.body.dow, req.body.steps, req.body.overactive, req.body.walk, req.body.drive);

    // create a new backpoints entry
    db.addEntry(entry);
    
    // get the list of entires
    let entries = db.getEntries();

    // return the full list (including the new entry)
    res.json(entries);
}

function getBackPoints(req, res, next) {

    // get the list of entires
    let entries = db.getEntries();

    // sent it to the response (for the browser)
    res.json(entries);
}

