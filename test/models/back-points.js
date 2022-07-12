const assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
const { response } = require("../../index");
let server = require("../../index");
const BpContents = require("../../models/back-points");
let expect = chai.expect;
chai.use(chaiHttp);
// let bpContents = require("../../models/back-points"); dont need
let BPEntry = require("../../models/back-points-entry");


describe("addEntry", function () {
  it("should add an entry into entries", async function () {
    const db = new BpContents();

    let entry = new BPEntry("Monday", 1000, 2, 0, 0);
    let entry2 = new BPEntry("Tuesday", 1000, 2, 0, 0);
    let entry3 = new BPEntry("Wednesday", 1000, 2, 0, 0);

    db.addEntry(entry);
    db.addEntry(entry2);
    db.addEntry(entry3);

    let entries = await db.getEntries();

    expect(entries).is.an("array");
    expect(entries.length).greaterThan(2);
  });
});

describe("getEntries", function () {
  it("should return entries array", function () {
    //TODO Is this not already done in 
  });
});

// Work in progress
// describe("getAverage", function () {
//   it("should return a number that is an average daily activity of the array")

//     let entry = new BPEntry("Monday", 1000, 2, 0, 0);
//     let entry2 = new BPEntry("Tuesday", 1000, 2, 0, 0);
//     let entry3 = new BPEntry("Wednesday", 1000, 2, 0, 0);

//     let result = 
// });
describe.skip("", () => {
  it("should get an array of entries I  added to BpContents", () => {
    let entry = new BPEntry("Monday", 1000, 2, 0, 0);
    let entry2 = new BPEntry("Tuesday", 1000, 2, 0, 0);
    let entry3 = new BPEntry("Wednesday", 1000, 2, 0, 0);
    let entry4 = new BPEntry("Thursday", 1000, 2, 0, 0);

    let kennel = new BpContents();
    kennel.addEntry(entry);
    kennel.addEntry(entry2);
    kennel.addEntry(entry3);
    kennel.addEntry(entry4);
    let result = kennel.getEntries();

    expect(result).to.be.an("array");
    expect(result.length).to.equal(4);
    console.log(result);
  });

  it("should calculate the average of all the items added to the BpContents", () => {
    let entry = new BPEntry("Monday", 1000, 2, 0, 0);
    let entry2 = new BPEntry("Tuesday", 1000, 2, 0, 0);
    let entry3 = new BPEntry("Wednesday", 1000, 2, 0, 0);
    let entry4 = new BPEntry("Thursday", 1000, 2, 0, 0);

    let kennel = new BpContents();
    kennel.addEntry(entry);
    kennel.addEntry(entry2);
    kennel.addEntry(entry3);
    kennel.addEntry(entry4);
    let result = kennel.getEntries();

    console.log(result);
    expect(result[0].fourDayAvg).to.equal(1600);
    expect(result[1].fourDayAvg).to.equal(1600);
    expect(result[2].fourDayAvg).to.equal(1600);
    expect(result[3].fourDayAvg).to.equal(1600);
  });

  it("should get an average of entries that I passed to the getaverage function", () => {
    let entry = new BPEntry("Monday", 1000, 2, 0, 0);
    let entry2 = new BPEntry("Tuesday", 1000, 2, 0, 0);
    let entry3 = new BPEntry("Wednesday", 1000, 2, 0, 0);
    let entry4 = new BPEntry("Thursday", 1000, 2, 0, 0);

    let kennel = new BpContents();
    kennel.addEntry(entry);
    kennel.addEntry(entry2);
    kennel.addEntry(entry3);
    kennel.addEntry(entry4);
    let result = kennel.getAverage();

    //should equal the average of mar17 and mar18
    expect(result).to.equal(1600);
  });
});
