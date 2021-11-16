let express = require("express");
// Express is a web framework
let bodyParser = require("body-parser");
//Dont worry about this for the time being
let app = express();

app.use(bodyParser.json());
//establishing express web framework
const bp = require("./controllers/api/v1/back-points");
// const BPEntry = require("./models/back-points-entry");
// Referencing backpoints controllers
// const BPEntry = require("./models/back-points-entry"); Dont need this

bp.registerEndpoints(app);
// calling the registerEndpoints function in the controller with the express framework as the parameter.

// This is what kicks off the app through port 3000 (http://localhost:3000/api/v1/back-points)
app.listen(3000, function (err) {
  if (!err) {
    console.log("server listening on http://localhost:3000");
  } else {
    console.error(err);
  }
});

module.exports = app;
