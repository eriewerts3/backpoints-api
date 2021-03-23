let express = require('express');
let app = express();
const bp = require('./controllers/api/v1/back-points');
const BPEntry = require('./models/back-points-entry');

bp.registerEndpoints(app);

app.listen(3000, function(err){
    if(!err) {
        console.log('server listening on http://localhost:3000');
    } else {
        console.error(err);
    }
});

module.exports = app;

/**************************************
 * HOME WORK
 */
 //TODO JH get code into github and make sure John has access
 //TODO JH get all tests running and add other tests
 //TODO JH instantiate three Bp entries and have threeDayAverage() react to it.

 // TODO jh make sure the GET test can return (this will return 0 items and that's ok, but it should return an empty array)

 /************************************
  * let bp1 = new BPEntry(...);
  * let bp2 = new BPEntry(...);
  * let bp3 = new BPEntry(...);
    *get 3 day avg of bp1, bp2, bp3

  * HINT: Need to change Get average to encompass all forms of averaging on kennel.
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  *
 */
