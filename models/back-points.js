const entry = require('./back-points-entry');

/**
 * A manager of creating multiple entries
 */

 class BpContents {
    constructor () {
        this.entries = [];
    }
    
    createEntry(dow,steps,overactive,walk,drive, da) {
        let e = new BPentry();
        this.entries.push(e);
    }

    getEntries() {
        return this.entries = [];
    }
 }

 module.exports = BpContents;