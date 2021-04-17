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

        // if we dont use have the array passed in
        if(!arr){
            arr = this.entries;
        }

        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i].da;
        }

        return sum / arr.length;
    }

    
    // Funciton that finds the average of an array of any size by using Array.reduce() to add all the numbers in the array then deviding it by the array length
    // get4DayAverage(arr) {
        
    //     for(let i = 0, l = arr.legth; i < l; i++){
    //         let check_3 = arr[i].has0wnProperty('fourDayAverage');
            
    //         if(check_3 === true){
    //             console.log(arr[i]('fourDayAverage'));
    //         } else {
    //            // Funciton that finds the average of an array of any size by using Array.reduce() to add all the numbers in the array then deviding it by the array length
    //             function getAvg(array) {
    //                 //TODO ? cycle through last 2 entries to calculate average from an array with all three entry parameters.
    //                 let sum = array.reduce((a,c) => a + c, 0);
    //                 return sum / array.length;
    //             }
    //             a= [];
    //             for (let index = 3; index > 0; index--) {
    //                 act_entry = arr[index]('da');
    //                 a.push(act_entry);
    //             }
    //             let result = getAvg(a);
    //             console.log('this is the result of for/else loop' + result);
    //             arr[i]('fourDayAverage') = result;
    //         }
    //     }
    // }

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
        return this.entries;
    }
 }

 module.exports = BpContents;