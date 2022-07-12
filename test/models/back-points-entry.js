const assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
const { response } = require("../../index");
let server = require("../../index");
let expect = chai.expect;
chai.use(chaiHttp);
let BPEntry = require("../../models/back-points-entry");

describe("dailyActivity", function () {
  it("should return a number based on formula", function () {
    let bpEntry = new BPEntry("Monday", 5000, 2, 1, 2);
    let result = bpEntry.dailyActivity; 
    expect(result).to.be.a("number");
    expect(result).to.equal(4100);
  });
});
