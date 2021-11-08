let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.json());
const bp = require("./controllers/api/v1/back-points");
const BPEntry = require("./models/back-points-entry");

bp.registerEndpoints(app);

app.listen(3000, function (err) {
  if (!err) {
    console.log("server listening on http://localhost:3000");
  } else {
    console.error(err);
  }
});

module.exports = app;
