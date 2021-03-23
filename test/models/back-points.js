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
// //TODO JH
// describe('johns homework', () => {
//     it('should get an array of entries I  added to the kennel', () => {
//         let mar17 = new BPEntry(...);
//         let mar18 = new BPEntry(...);
//         let mar19 = new BPEntry(...);
        
//         let kennel = new BpContents();
//         kennel.addEntry(mar17)
//         kennel.addEntry(mar18)
//         kennel.addEntry(mar19)
//         let result = kennel.getEntries();

//         expect(result).to.be.an('array');
//         expect(result.length).to.equal(3);
//     });

//     it('should get an average of entries that i passed to the average function', () => {
//         let mar17 = new BPEntry(...);
//         let mar18 = new BPEntry(...);
//         let mar19 = new BPEntry(...);
        
//         let kennel = new BpContents();
//         kennel.addEntry(mar17)
//         kennel.addEntry(mar18)
//         kennel.addEntry(mar19)
//         let result = kennel.getAverage([mar17, mar18]);

//         //should equal the average of mar17 and mar18
//         expect(result.length).to.equal(tbd); 
//     });

//     it('should calculate the average of all the items added to the kennel', () => {
//         let mar17 = new BPEntry(...);
//         let mar18 = new BPEntry(...);
//         let mar19 = new BPEntry(...);
        
//         let kennel = new BpContents();
//         kennel.addEntry(mar17)
//         kennel.addEntry(mar18)
//         kennel.addEntry(mar19)
//         let result = kennel.getAverage();

//         //should equal the average of mar17 and mar18 and mar19
//         expect(result.length).to.equal(tbd);

//     });
// });

// //hints this stuff gets put into the "kennel"

// let entries = [];

// function getAverage(arr) {
//     if(arr){
//         //go stuff with the array
//     } else {
//         // do stuff against entries array
        
//     }
// }