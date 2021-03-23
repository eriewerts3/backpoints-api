const assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('../../index');
let server = require('../../index');
const BpContents = require('../../models/back-points');
let expect = chai.expect;
chai.use(chaiHttp);
let bpContents = require('../../models/back-points');
let BPEntry = require('../../models/back-points-entry');

describe('createEntry', function() {
    it('should return an object', function () {
        //TODO JH
    });
})

describe('getEntries', function() {
it('should return entries array', function () {
        //TODO JH
    });
})
//TODO JH
describe('johns homework', () => {
    it('should get an array of entries I  added to the kennel', () => {
        let bp1 = new BPEntry(...);
        let bp2 = new BPEntry(...);
        let bp3 = new BPEntry(...);
        
        let kennel = new BpContents();
        kennel.addEntry(bp1)
        kennel.addEntry(bp2)
        kennel.addEntry(bp3)
        let result = kennel.getEntries();

        expect(result).to.be.an('array');
        expect(result.length).to.equal(3);
    });

    it('should get an average of entries that i passed to the average function', () => {
        let bp1 = new BPEntry(...);
        let bp2 = new BPEntry(...);
        let bp3 = new BPEntry(...);
        
        let kennel = new BpContents();
        kennel.addEntry(bp1)
        kennel.addEntry(bp2)
        kennel.addEntry(bp3)
        let result = kennel.getAverage([bp1, bp2]);

        //should equal the average of bp1 and bp2
        expect(result.length).to.equal(tbd); 
    });

    it('should calculate the average of all the items added to the kennel', () => {
        let bp1 = new BPEntry(...);
        let bp2 = new BPEntry(...);
        let bp3 = new BPEntry(...);
        
        let kennel = new BpContents();
        kennel.addEntry(bp1)
        kennel.addEntry(bp2)
        kennel.addEntry(bp3)
        let result = kennel.getAverage();

        //should equal the average of bp1 and bp2 and bp3
        expect(result.length).to.equal(tbd);

    });
});

//hints this stuff gets put into the "kennel"

let entries = [];

function getAverage(arr) {
    if(arr){
        //go stuff with the array
    } else {
        // do stuff against entries array
        
    }
}