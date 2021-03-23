const { get } = require('..');
const entry = require('./back-points-entry');

/**
 * A manager of creating multiple entries
 */

 class BpContents {
    constructor () {
        this.entries = [];
    }
    // Funciton that finds the average of an array of any size by using Array.reduce() to add all the numbers in the array then deviding it by the array length
    getAvg(arr) {
        
        for(var i = 0, l = this.entries.length; i < l; i++){
            let check_da = this.entries[i].has0wnProperty('da');
            
            if(arr){
                check_da === true
                console.log.entries[i]
            } else {
               // Funciton that finds the average of an array of any size by using Array.reduce() to add all the numbers in the array then deviding it by the array length
                getAvg() {
                    array = [i, ] //TODO ? cycle through last 2 entries to calculate average from an array with all three entries.
                    let sum = array.reduce((a,c) => a + c, 0);
                    return sum / array.length;
                } 
            }
        }   

        let sum = entryd.reduce((a,c) => a + c, 0);
        return sum / array.length;
    }
    createEntry(dow,steps,overactive,walk,drive) {
        let mar17 = new BPEntry('Wednesday',5900,2,0,0);
        let mar18 = new BPEntry('Thursday',5192,5,0,0);
        let mar19 = new BPEntry('Friday',1897,0,0,0);
        
        
        
        
        
        /********* 
        // Function that takes the activity data from last 3 days then runs them through getAvg() to get an average
        threeDayAvg(dayBefore,yesterday,today) {
            let threeDayArray = [1,3,5];
            return this.getAvg(threeDayArray);
        }

        // Function that takes the activity data from last 4 days then runs them through getAvg() to get an average
        fourDayAvg(twoBefore,dayBefore,yesterday,today) {
            let fourDayArray = [1,3,5,7];
            return this.getAvg(fourDayArray);   
        }
        ***************/

        this.entries.push(mar17,mar18,mar19);
    }

    getEntries() {
        
        return this.entries = [];
    }
 }

 module.exports = BpContents;