let Chance = require('chance');
let chance = new Chance();
//TODO ? Should we take away chance?
/**
 * A class to retrieve information about backpoints
 */
class BPEntry {

    constructor (dow,steps,overactive,walk,drive) {
        this.dow = dow; // Day of Week
        this.steps = steps; 
        this.overactive = overactive; //Overactive hours
        this.walk = walk; //hours walked
        this.drive = drive; //hours driven.
        this.da = this.dailyActivity(); // Daily activity
        this.threeAverage = this.threeDayAvg();
        this.fourAverage = this.fourDayAvg();
        //TODO FT this.FP = this.forcastedPain();
        //TODO FT this.mp = this.mp; //measured pain
    }

    // Funciton that finds the average of an array of any size by using Array.reduce() to add all the numbers in the array then deviding it by the array length
    getAvg(array) {
        let sum = array.reduce((a,c) => a + c, 0);
        return sum / array.length;
    }

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

    dailyActivity(){
        let steps = this.steps;
        let oa = this.overactive;
        let walk = this.walk;
        let drive = this.drive;

        let activity = steps + (oa*300) - (walk*2500) + (drive*500);
        console.log(activity);
        return activity
    }


}

module.exports = BPEntry;