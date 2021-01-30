let bpContents = require('../../../models/back-points');

module.exports.registerEndpoints = (router) => {
    router.get('/api/v1/back-points', createBackPoints);
};

function createBackPoints(req, res, next){

    bpContents.createNewEntry();
    
    res.json(bpContents.getEntries());
}