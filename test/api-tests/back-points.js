const assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
const { response } = require("../../index");
let server = require("../../index");
let expect = chai.expect;
chai.use(chaiHttp);

describe("api-tests/back-points", () => {
  it("should call backpoints api correctly", async () => {
    //start up the server and get a reference to it to make requests to it
    let serverRequest = await chai.request(server);

    //issue sample request to test endpoint
    let response = await serverRequest.get("/api/v1/back-points");

    //let res = await chai.request(server).get('/api/v1/back-points-entry');

    // get body object from response (other things we can get are headers)
    let resArray = response.body;
    console.log(response).stringify();
    console.log(resArray);

    expect(resArray).to.be.an("array");
  });

});

