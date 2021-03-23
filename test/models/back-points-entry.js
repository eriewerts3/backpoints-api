const assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
const { response } = require('../../index');
let server = require('../../index');
let expect = chai.expect;
chai.use(chaiHttp);
let BPEntry = require('../../models/back-points-entry');

describe('getAvg',function () {
    it('should return an average from that array', function () {
        let bpEntry = new BPEntry('Monday',5000,2,1,2);
        let testArray = [1,3,5]
        let result = bpEntry.getAvg(testArray);
        expect(result).to.be.a('number');
        expect(result).to.equal(3);
    });


    
})

describe.skip('threeDayAvg', function(){
    it('should return a number', function () {
        expect(bpEntry.threeDayAvg(2,4,6,8)).to.be.a('number');
    });

    it('should return an average of the 3 parameters',function() {
        expect(bpEntry.threeeDayAvg(1,3,5)).to.equal(3);
    });
})


describe.skip('fourDayAvg', function() {
    it('should return a number', function () {
        expect(bpEntry.fourDayAvg(2,4,6,8)).to.be.a('number');
    });

    it('should create an object', function() {
    expect(bpEntry.fourDayAvg(2,4,6,8)).to.equal(5);
    });
})

describe.skip('dailyActivity',function() {
    it('should return a number', function () {
        let bpEntry = new BPEntry('Monday',5000,2,1,2); //TODO jh ADD TO OTHER TESTS
        let result = bpEntry.getAvg();
        expect(result).to.be.a('number');
    });

    //TODO ? How do I write a test on functionality with the parameter variables referencing a seperate object
})