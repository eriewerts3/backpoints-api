const BPEntry = require('./back-points-entry');

/**
 * A manager of creating multiple entries
 */

 class BpContents {
    
    constructor () {
        this.entries = [];
    }

    /**
     * Gets an average of entries
     * @param {BPEntry[]} [arr=this.entries[]] arr Array of BP Entries (optional)
     * @returns 
     */
    getAverage(arr) {

        // if we dont use have the array passed in use entries
        if(!arr){
            arr = this.entries;
        }
        for (const item of arr) {
            // if object has property of fouravg continue if now calculate based on last 4 days
            if (item.hasOwnProperty(fouravg)) {
                continue;
            } else {
                fourdays = []
                for (let i = 4; i > 0; --i) {
                    fourdays.push(item[i]);
                }
                let sum = 0
                for (let i = 0; i < fourdays.length; i++) {
                    sum = sum + arr[i].da;
                    average4 = sum / fourdays.length;
                }
                item[i].fouravg = average4;
            }
        }
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
        this.getAverage(entries);
        return this.entries;
    }
 }

 module.exports = BpContents;