let BpContents = require('../../../models/back-points');

module.exports.registerEndpoints = (router) => {
    // this is the GET in Homework
    router.get('/api/v1/back-points', getBackPoints);
    router.post('/api/v1/back-points', createBackPoints);
};
//TODO ? I think req, res, next are API routes with Express.js do we need Express.js imported?
function createBackPoints(req, res, next){

    //instantiate a new instance of bp contents
    let bpc = new BpContents();

    // create a new backpoints entry
    bpc.createEntry(req.body);
    
    // get the list of entires
    let entries = bpc.getEntries();

    // return the full list (including the new entry)
    res.json(entries);
}

function getBackPoints(req, res, next) {

    //instantiate a new instance of bp contents
    let bpc = new BpContents();

    // get the list of entires
    let entries = bpc.getEntries();

    // sent it to the response (for the browser)
    res.json(entries);
}

