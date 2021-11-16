const assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
const { response } = require("../../index");
let server = require("../../index");
let expect = chai.expect;
chai.use(chaiHttp);
let BPEntry = require("../../models/back-points-entry");

describe.skip("dailyActivity", function () {
  it("should return a number", function () {
    let bpEntry = new BPEntry("Monday", 5000, 2, 1, 2); //
    let result = bpEntry.getAvg();
    expect(result).to.be.a("number");
  });

  //TODO ? How do I write a test on functionality with the parameter variables referencing a seperate object
});
