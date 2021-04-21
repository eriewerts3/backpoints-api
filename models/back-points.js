const BPEntry = require('./back-points-entry');


/**
 * A manager of creating multiple entries
 */

class BpContents {

    constructor() {
        this.entries = [];
    }

    /**
     * Gets an average of entries
     * @param {BPEntry[]} [arr=this.entries[]] arr Array of BP Entries (optional)
     * @returns 
     */
    getAverage(arr) {

        // if we dont use have the array passed in use entries
        if (!arr) {
            arr = this.entries;
        }

        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i].da;
        }
        return sum / arr.length;
    }

    /**
     * adds a new bpentry to the database
     * @param {BPEntry} newEntry the new entry you're passing to add
     */
    addEntry(newEntry) {
        this.entries.push(newEntry);
    }

    /**
     * Get you all the entries stored in the database
     * @returns 
     */
    getEntries() {


        for (let i = 0; i < this.entries; i++) {

            switch (i) {
                case 0:
                    this.entries[i].fourDayAvg = this.entries[0].da;
                    break;
                case 1:
                    this.entries[i].fourDayAvg = this.getAverage([this.entries[0], this.entries[1]]);
                    break;
                case 2:
                    this.entries[i].fourDayAvg = this.getAverage([this.entries[0], this.entries[1], this.entries[2]]);
                    break;
                default:
                    let arr = [];

                    //get last 4 items from current index
                    for (j = i; j > (i - 4); i--) {
                        arr.push(this.entries[j]);
                    }

                    this.entries[i].fourDayAvg = this.getAverage(arr);

                    break;
            }

            const element = this.entries[i];

        }

        return this.entries;
    }
}

module.exports = BpContents;