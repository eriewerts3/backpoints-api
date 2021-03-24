const { get } = require('..');
const BPEntry = require('./back-points-entry');
const entry = require('./back-points-entry');

/**
 * A manager of creating multiple entries
 */

 class BpContents {
    constructor () {
        this.entries = [];
    }
    // Funciton that finds the average of an array of any size by using Array.reduce() to add all the numbers in the array then deviding it by the array length
    get4DayAverage(arr) {
        
        for(let i = 0, l = arr.legth; i < l; i++){
            let check_3 = arr[i].has0wnProperty('fourDayAverage');
            
            if(check_3 === true){
                console.log(arr[i]('fourDayAverage'));
            } else {
               // Funciton that finds the average of an array of any size by using Array.reduce() to add all the numbers in the array then deviding it by the array length
                function getAvg(array) {
                    //TODO ? cycle through last 2 entries to calculate average from an array with all three entry parameters.
                    let sum = array.reduce((a,c) => a + c, 0);
                    return sum / array.length;
                }
                a= [];
                for (let index = 3; index > 0; index--) {
                    act_entry = arr[index]('da');
                    a.push(act_entry);
                }
                let result = getAvg(a);
                console.log('this is the result of for/else loop' + result);
                arr[i]('fourDayAverage') = result;
            }
        }
    }
    createEntry(dow,steps,overactive,walk,drive) {
        let mar17 = new BPEntry('Wednesday',5900,2,0,0);
        let mar18 = new BPEntry('Thursday',5192,5,0,0);
        let mar19 = new BPEntry('Friday',1897,0,0,0);
        let mar20 = new BPEntry('Saturday',6500,6,0,0)

        this.entries.push(mar17,mar18,mar19,mar20);
    }

    getEntries() {
        
        return this.entries = [];
    }
 }

 module.exports = BpContents;